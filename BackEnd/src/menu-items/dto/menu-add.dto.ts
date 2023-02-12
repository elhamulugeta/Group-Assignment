import { IsNumber, IsString } from "class-validator";


export class AddMenuDto{

    @IsString()
    Food: string;

    @IsNumber()
    Price: string;
}