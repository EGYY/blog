import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {CreatePostDto} from "./dto/create-post.dto";
import {FileService} from "../file/file.service";

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private fileService: FileService) {}

    async createPost(dto: CreatePostDto, image:any) {
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create({...dto, image: fileName});
        return post;
    }
}
