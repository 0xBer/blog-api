import {
	Body,
	Controller,
	Get,
	Post,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('register')
	async register(
		@Body() user: { name: string; password: string },
	) {
		return this.authService.register(user);
	}

	@Post('login')
	async login() {
		return this.authService.login();
	}

	@Post('logout')
	async logout() {
		return this.authService.logout();
	}
}
