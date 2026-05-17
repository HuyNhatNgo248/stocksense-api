import * as Sentry from '@sentry/nestjs';

/**
 * Wraps a method so any thrown error is reported to Sentry, then re-thrown.
 * Use on @Cron and @Process handlers — re-throw lets Bull retry and is harmless
 * for crons (the scheduler ignores throws).
 */
export function SentryCapture(tags: Record<string, string> = {}) {
  return function <T, A extends unknown[], R>(
    target: object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<(this: T, ...args: A) => Promise<R>>,
  ): TypedPropertyDescriptor<(this: T, ...args: A) => Promise<R>> {
    const original = descriptor.value;
    if (!original) return descriptor;

    descriptor.value = async function (this: T, ...args: A): Promise<R> {
      try {
        return (await original.apply(this, args)) as R;
      } catch (err) {
        Sentry.captureException(err, {
          tags: {
            ...tags,
            handler: `${(target as { constructor: { name: string } }).constructor.name}.${propertyKey}`,
          },
        });
        throw err;
      }
    };

    return descriptor;
  };
}

/**
 * Runs `fn`, reports any thrown error to Sentry, and returns `null` instead of
 * propagating. Use inside loops where one bad iteration should not abort the rest.
 */
export async function captureAndContinue<T>(
  fn: () => Promise<T>,
  tags: Record<string, string> = {},
): Promise<T | null> {
  try {
    return await fn();
  } catch (err) {
    Sentry.captureException(err, { tags });
    return null;
  }
}
