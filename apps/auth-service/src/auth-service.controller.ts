import { Controller } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import {
	MessagePattern,
	Payload,
} from '@nestjs/microservices';

@Controller()
export class AuthServiceController {
	constructor(
		private readonly authServiceService: AuthServiceService,
	) {}

	@MessagePattern('register')
	async register(@Payload() data: any) {
		return this.authServiceService.register(data);
	}

	@MessagePattern('login')
	async login() {
		return this.authServiceService.login();
	}

	@MessagePattern('logout')
	async logout() {
		return this.authServiceService.logout();
	}
}
