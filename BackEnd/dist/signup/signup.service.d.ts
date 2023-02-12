import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
export declare class SignupService {
    get(): {
        name: string;
        age: string;
    };
    create(CreateUserDto: CreateUserDto): CreateUserDto;
    update(UpdateUserDto: UpdateUserDto, userId: number): {
        body: UpdateUserDto;
        userId: number;
    };
    getUser(userId: number): {
        userId: number;
    };
    delete(userId: number): {
        userId: number;
    };
}
