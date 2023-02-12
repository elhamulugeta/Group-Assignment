import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { SignupService } from './signup.service';
export declare class SignupController {
    private signupService;
    constructor(signupService: SignupService);
    getUsers(): {
        name: string;
        age: string;
    };
    getUser(userId: number): {
        userId: number;
    };
    store(CreateUserDto: CreateUserDto): CreateUserDto;
    update(UpdateUserDto: UpdateUserDto, userId: number): {
        body: UpdateUserDto;
        userId: number;
    };
    deleteUser(userId: number): {
        userId: number;
    };
}
