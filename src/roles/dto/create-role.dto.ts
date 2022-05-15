import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Роль пользователя'})
    @IsString({message: 'value должно быть строкой'})
    readonly value: string;

    @IsString({message: 'description должно быть строкой'})
    @ApiProperty({example: 'Администратор', description: 'Описание роли пользователя'})
    readonly description: string;
}