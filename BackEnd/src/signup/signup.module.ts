import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';

@Module({
  imports: [SignupModule],
  controllers: [SignupController],
  providers: [SignupService]
})
export class SignupModule {}
