import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({example: 'Путин президент мира!', description: 'Заголовок поста'})
    @IsString({message: 'title должно быть строкой'})
    title: string;

    @ApiProperty({example: 'И это факт', description: 'Описание поста'})
    @IsString({message: 'content должно быть строкой'})
    content: string;

    @ApiProperty({example: 1, description: 'ID пользователя - создатель поста'})
    @IsString({message: 'title должно быть числом'})
    userId: number;
}