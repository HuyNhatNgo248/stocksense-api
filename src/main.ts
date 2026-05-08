import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { loggerMiddleware } from './common/middleware/logger.middleware';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });

  app.use(loggerMiddleware);

  const config = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: config.getOrThrow<string>('FRONTEND_URL'),
    credentials: true,
  });

  app.setGlobalPrefix('api');

  const frontendUrl = config.getOrThrow<string>('FRONTEND_URL');
  app.use(
    createProxyMiddleware({
      target: frontendUrl,
      changeOrigin: true,
    }),
  );

  await app.listen(config.get<number>('PORT', 3000));
}

void bootstrap();
