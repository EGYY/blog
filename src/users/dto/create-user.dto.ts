import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'test@test.test', description: 'Email адрес'})
    @IsString({message: 'Поле email должно быть строкой'})
    @IsEmail({}, {message: 'Не валидный email'})
    readonly email:string;

    @IsString({message: 'Пароль должен быть строкой'})
    @Length(4, 16, {message: 'Пароль должен быть не менее 4 и не более 16 символов'})
    @ApiProperty({example: '123456qwerty', description: 'Пароль'})
    readonly password:string;
}