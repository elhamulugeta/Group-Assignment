import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';

@Injectable()
export class SignupService {
    get(){
        return {name: "Elham Mulugeta", age: "20"};
    }

    create(CreateUserDto: CreateUserDto){
        return CreateUserDto;
    }

    update(
        UpdateUserDto: UpdateUserDto,
        userId: number
        ){
        return {body: UpdateUserDto, userId};
    }

    getUser(userId:number){
        return {userId: userId};
    }

    delete(userId:number){
        return {userId: userId};
    }



}
