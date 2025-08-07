import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
	async register() {
		return { message: 'Register' };
	}

	async login() {
		return { message: 'Login' };
	}

	async logout() {
		return { message: 'Logout' };
	}
}
