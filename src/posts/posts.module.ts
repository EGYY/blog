import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {User} from "../users/users.model";
import {FileModule} from "../file/file.module";

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
      SequelizeModule.forFeature([Post, User]),
      FileModule,
  ]
})
export class PostsModule {}
