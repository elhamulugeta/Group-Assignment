import { Controller, Get, Post, Put, Delete, Body, Param, Req, Patch, ParseIntPipe } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
    
    constructor(private signupService:SignupService){}

    @Get()
    getUsers(){
        return this.signupService.get();
    }

    @Get('/:userId') 
    getUser(@Param('userId', ParseIntPipe) userId: number){
        return this.signupService.getUser(userId);
    }

    @Post()
    store(@Body() CreateUserDto: CreateUserDto){
        return this.signupService.create(CreateUserDto);
    }

    @Patch('/:userId')
    update(
        @Body() UpdateUserDto: UpdateUserDto,
        @Param('userId', ParseIntPipe) userId: number){
        return this.signupService.update(UpdateUserDto, userId);
    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number){
        return this.signupService.delete(userId);
    }
}
