import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
config();
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
