import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
	async createPost() {
		return { message: 'Create Post' };
	}

	async getAllPosts() {
		return { message: 'Get All Posts' };
	}

	async getOnePost() {
		return { message: 'Get One Post' };
	}

	async getAuthorPost() {
		return { message: 'Get Author Post' };
	}

	async updatePost() {
		return { message: 'Update Post' };
	}

	async deletePost() {
		return { message: 'Delete Post' };
	}
}
