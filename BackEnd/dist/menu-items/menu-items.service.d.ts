import { AddMenuDto } from './dto/menu-add.dto';
export declare class MenuItemsService {
    get(): {
        tableId: string;
    };
    create(addMenuDto: AddMenuDto, tableId: number): {
        body: typeof AddMenuDto;
        tableId: number;
    };
    update(): string;
    getTable(tableId: number): {
        tableId: number;
    };
    delete(tableId: number): {
        tableId: number;
    };
}
