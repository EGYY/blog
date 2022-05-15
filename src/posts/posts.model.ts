import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";

import {User} from "../users/users.model";

interface PostAttr {
    title: string,
    content: string,
    userId: number,
    image: string,
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostAttr>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Typescript и его приемущества', description: 'Заголовок поста'})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @ApiProperty({example: 'Он крутой', description: 'Тело поста с описанием'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: '123123.jpg', description: 'Изображение поста'})
    @Column({type: DataType.STRING})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User;
}