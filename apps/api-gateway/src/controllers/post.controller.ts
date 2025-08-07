import {
	Controller,
	Delete,
	Get,
	Patch,
	Post,
} from '@nestjs/common';
import { PostService } from '../services/post.service';

@Controller('post')
export class PostController {
	constructor(
		private readonly postService: PostService,
	) {}

	// Create post
	@Post('create')
	async createPost() {
		return this.postService.createPost();
	}

	// Get all posts
	@Get('')
	async getAllPosts() {
		return this.postService.getAllPosts();
	}

	// Get one post
	@Get(':id')
	async getOnePost() {
		return this.postService.getOnePost();
	}

	// Get all posts by author
	@Get(':author')
	async getAuthorPost() {
		return this.postService.getAuthorPost();
	}

	// Update post
	@Patch(':id')
	async updatePost() {
		return this.postService.updatePost();
	}

	// Delete post
	@Delete(':id')
	async deletePost() {
		return this.postService.deletePost();
	}
}
