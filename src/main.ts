import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { config } from 'dotenv';
config();
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
