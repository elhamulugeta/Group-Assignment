import { IsEmail, IsString } from "class-validator";

export class UpdateUserDto{
    @IsString()
    password: string;

    @IsEmail()
    email: string;
}