import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: '1', description: 'ID пользователя'})
    @IsNumber({}, {message: 'userId должно быть числом'})
    userId: number;

    @ApiProperty({example: 'Хулиган', description: 'Причина бана пользователя'})
    @IsString({message: 'banReason должно быть строкой'})
    banReason: string;
}