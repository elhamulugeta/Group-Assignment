"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsController = void 0;
const common_1 = require("@nestjs/common");
const menu_add_dto_1 = require("./dto/menu-add.dto");
const menu_items_service_1 = require("./menu-items.service");
let MenuItemsController = class MenuItemsController {
    constructor(menuitemsService) {
        this.menuitemsService = menuitemsService;
    }
    get() {
        return this.menuitemsService.get();
    }
    getTable(tableId) {
        return this.menuitemsService.getTable(tableId);
    }
    store(addmenuDto, tableId) {
        return this.menuitemsService.create(addmenuDto, tableId);
    }
    update() {
        return this.menuitemsService.update();
    }
    deleteUser(tableId) {
        return this.menuitemsService.delete(tableId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuItemsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(":tableId"),
    __param(0, (0, common_1.Param)('tableId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MenuItemsController.prototype, "getTable", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_add_dto_1.AddMenuDto, Number]),
    __metadata("design:returntype", void 0)
], MenuItemsController.prototype, "store", null);
__decorate([
    (0, common_1.Patch)('/:userId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:userId'),
    __param(0, (0, common_1.Param)('tableId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MenuItemsController.prototype, "deleteUser", null);
MenuItemsController = __decorate([
    (0, common_1.Controller)('menu-items'),
    __metadata("design:paramtypes", [menu_items_service_1.MenuItemsService])
], MenuItemsController);
exports.MenuItemsController = MenuItemsController;
//# sourceMappingURL=menu-items.controller.js.map