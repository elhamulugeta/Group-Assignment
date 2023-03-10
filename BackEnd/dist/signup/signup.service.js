"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupService = void 0;
const common_1 = require("@nestjs/common");
let SignupService = class SignupService {
    get() {
        return { name: "Elham Mulugeta", age: "20" };
    }
    create(CreateUserDto) {
        return CreateUserDto;
    }
    update(UpdateUserDto, userId) {
        return { body: UpdateUserDto, userId };
    }
    getUser(userId) {
        return { userId: userId };
    }
    delete(userId) {
        return { userId: userId };
    }
};
SignupService = __decorate([
    (0, common_1.Injectable)()
], SignupService);
exports.SignupService = SignupService;
//# sourceMappingURL=signup.service.js.map