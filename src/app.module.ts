import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BaseController } from './auth/base.controller';
//TODO: auto genearte username
//TODO: Phone number and OTP
//TODO: date of birth or age
// TODO: Image and other stuffs
@Module({
  imports: [AuthModule],
  controllers: [BaseController],
  providers: [],
})
export class AppModule {}
