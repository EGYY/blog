import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Role} from "./roles.model";
import {CreateRoleDto} from "./dto/create-role.dto";

@ApiTags('Роли пользователей')
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @ApiOperation({summary: 'Создание роли'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    createRole(@Body() roleDto: CreateRoleDto) {
        return this.rolesService.createRole(roleDto);
    }

    @ApiOperation({summary: 'Поиск роли роли'})
    @ApiResponse({status: 200, type: Role})
    @Get('/:value')
    getRole(@Param('value') value: string) {
        return this.rolesService.getRole(value);
    }
}
