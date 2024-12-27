import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';
config();
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 4000);
  console.log(`Server is running on port: ${process.env.PORT ?? 4000}`);
}
bootstrap();
