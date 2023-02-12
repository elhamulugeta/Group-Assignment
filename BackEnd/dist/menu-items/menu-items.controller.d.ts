import { AddMenuDto } from './dto/menu-add.dto';
import { MenuItemsService } from './menu-items.service';
export declare class MenuItemsController {
    private menuitemsService;
    constructor(menuitemsService: MenuItemsService);
    get(): {
        tableId: string;
    };
    getTable(tableId: number): {
        tableId: number;
    };
    store(addmenuDto: AddMenuDto, tableId: number): {
        body: typeof AddMenuDto;
        tableId: number;
    };
    update(): string;
    deleteUser(tableId: number): {
        tableId: number;
    };
}
