import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { AddMenuDto } from './dto/menu-add.dto';
import { UpdateMenuDto } from './dto/menu-update.dto';
import { MenuItemsService } from './menu-items.service';

@Controller('menu-items')
export class MenuItemsController {
    constructor(private menuitemsService: MenuItemsService){
    }


    @Get()
    get(){
        return this.menuitemsService.get();
    }


    @Get(":tableId")
    getTable(@Param('tableId', ParseIntPipe) tableId: number){
        return this.menuitemsService.getTable(tableId);
    }
    
    @Post()
    store(@Body() addmenuDto: AddMenuDto,
          @Param('tableId', ParseIntPipe) tableId: number){
        return this.menuitemsService.create(addmenuDto, tableId);
    }

    @Patch('/:userId')
    update(addMenuDto: AddMenuDto, 
        @Param('tableId', ParseIntPipe) tableId: number ){
        return this.menuitemsService.update(addMenuDto, tableId);
    }

    @Delete('/:userId')
    deleteUser(@Param('tableId', ParseIntPipe) tableId: number){
        return this.menuitemsService.delete(tableId);
    }

}

