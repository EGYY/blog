import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {CreateRoleDto} from "./dto/create-role.dto";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {
    }

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepository.create(dto);
        return role;
    }

    async updateRole(id, dto: CreateRoleDto) {
        const role = await this.roleRepository.findByPk(id);
        if (!role) {
            throw new HttpException('Такой роли не существует', HttpStatus.BAD_REQUEST);
        }

        await role.update(dto);
        return role;
    }

    async deleteRole(value: string) {
        const role = await this.getRole(value);

        if (!role) {
            throw new HttpException('Такой роли не существует', HttpStatus.BAD_REQUEST);
        }

        await role.destroy()
        return role;
    }

    async getRole(value: string) {
        const role = await this.roleRepository.findOne({where: {value}});
        return role;
    }
}
