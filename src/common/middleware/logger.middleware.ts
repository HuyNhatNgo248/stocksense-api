import { Logger } from '@nestjs/common';
import chalk from 'chalk';
import type { Request, Response, NextFunction } from 'express';

const logger = new Logger('HTTP');

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    const status = res.statusCode;
    const method = chalk.magentaBright.bold(req.method.padEnd(6));
    const url = chalk.whiteBright(req.originalUrl);
    const duration = chalk.dim(`${ms}ms`);
    const code =
      status >= 500
        ? chalk.redBright.bold(status)
        : status >= 400
          ? chalk.yellowBright.bold(status)
          : chalk.greenBright.bold(status);
    logger.log(`${method} ${url} ${code} ${duration}`);
  });
  next();
}
