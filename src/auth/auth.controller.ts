import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {User} from "../users/users.model";
import {AuthService} from "./auth.service";

@ApiTags('Авторизация/Регистрация')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @ApiOperation({summary: 'Авторизация'})
    @ApiResponse({status: 200, type: User})
    @Post('/login')
    login(@Body() dto: CreateUserDto) {
        return this.authService.login(dto);
    }

    @ApiOperation({summary: 'Регистрация'})
    @ApiResponse({status: 200, type: User})
    @Post('/registration')
    registration(@Body() dto: CreateUserDto) {
        return this.authService.registration(dto)
    }
}
