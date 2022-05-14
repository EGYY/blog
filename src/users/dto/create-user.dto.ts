import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'test@test.test', description: 'Email адрес'})
    readonly email:string;

    @ApiProperty({example: '123456qwerty', description: 'Пароль'})
    readonly password:string;
}