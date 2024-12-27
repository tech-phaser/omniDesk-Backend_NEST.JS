import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
config();
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app
    .getHttpAdapter()
    .getInstance()
    .get('/', (req: Request, res: Response) => {
      res.send('hello nest');
    });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
