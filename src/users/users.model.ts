import {BelongsToMany, Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/posts.model";

interface UserAttr {
    email: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserAttr> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'test@test.test', description: 'Email адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '123456qwerty', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    // @Column({type: DataType.STRING, unique: true, allowNull: true})
    // username: string;

    @ApiProperty({example: 'false', description: 'Статус бана пользователя'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'Нецензурная лексика', description: 'Причина бана пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasMany(() => Post)
    posts: Post[]
}