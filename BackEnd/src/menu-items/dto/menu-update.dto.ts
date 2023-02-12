import { IsNumber, IsString } from "class-validator";


export class UpdateMenuDto{

    @IsString()
    Food: string;

    @IsNumber()
    Price: string;
}