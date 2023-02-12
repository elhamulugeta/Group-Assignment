import { Module } from '@nestjs/common';
import { MenuItemsController } from './menu-items.controller';
import { MenuItemsService } from './menu-items.service';

@Module({
  imports: [MenuItemsModule],
  controllers: [MenuItemsController],
  providers: [MenuItemsService]
})
export class MenuItemsModule {}
