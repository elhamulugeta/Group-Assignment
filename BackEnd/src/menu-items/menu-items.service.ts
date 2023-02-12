import { Injectable } from '@nestjs/common';
import { table } from 'console';
import { AddMenuDto } from './dto/menu-add.dto';

@Injectable()
export class MenuItemsService {
    get(){
        return {tableId: "1"};
    }

    create(addMenuDto:AddMenuDto,
        tableId: number){
        return {body: AddMenuDto, tableId};
    }

    update(
        addMenuDto: AddMenuDto,
        tableId: number,
        ){
        return {body: AddMenuDto, tableId};
    }

    getTable(tableId: number){
        return {tableId: tableId};
    }

    delete(tableId:number){
        return {tableId: tableId};
    }

}
