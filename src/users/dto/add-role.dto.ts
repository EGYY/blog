import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Наименование роли пользователя'})
    @IsString({message: 'value должно быть строкой'})
    value: string;

    @ApiProperty({example: '1', description: 'ID пользователя'})
    @IsNumber({}, {message: 'userId должно быть числом'})
    userId: number;
}