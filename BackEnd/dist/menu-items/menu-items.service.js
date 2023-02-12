"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsService = void 0;
const common_1 = require("@nestjs/common");
const menu_add_dto_1 = require("./dto/menu-add.dto");
let MenuItemsService = class MenuItemsService {
    get() {
        return { tableId: "1" };
    }
    create(addMenuDto, tableId) {
        return { body: menu_add_dto_1.AddMenuDto, tableId };
    }
    update() {
        return "Yay";
    }
    getTable(tableId) {
        return { tableId: tableId };
    }
    delete(tableId) {
        return { tableId: tableId };
    }
};
MenuItemsService = __decorate([
    (0, common_1.Injectable)()
], MenuItemsService);
exports.MenuItemsService = MenuItemsService;
//# sourceMappingURL=menu-items.service.js.map