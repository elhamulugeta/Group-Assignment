import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './comments/comments.module';
import { SignupController } from './signup/signup.controller';
import { SignupModule } from './signup/signup.module';
import { MenuItemsModule } from './menu-items/menu-items.module';

@Module({
  imports: [CommentsModule, SignupModule, MenuItemsModule]
})
export class AppModule {}
