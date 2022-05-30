import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Post } from "./posts.model";
import { CreatePostDto } from "./dto/create-post.dto";
import { FileService } from "../file/file.service";

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postRepository: typeof Post,
        private fileService: FileService) { }

    async createPost(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create({ ...dto, image: fileName });
        return post;
    }

    async getPosts() {
        const posts = await this.postRepository.findAll({include: { all: true }}, );
        return posts;
    }

    async updatePost(id: number, dto: CreatePostDto) {
        const post = await this.postRepository.findByPk(id);

        if (!post) {
            throw new HttpException('Поста с таким id не существует!', HttpStatus.BAD_REQUEST);
        }

        const updatedPost = await post.update(dto);
        return updatedPost;
    }

    async deletePost(id: number) {
        const post = await this.postRepository.findByPk(id);

        if (!post) {
            throw new HttpException('Поста с таким id не существует!', HttpStatus.BAD_REQUEST);
        }

        post.destroy();
        return post;
    }

}
