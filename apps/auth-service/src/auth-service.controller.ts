import { Controller } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import {
	Ctx,
	KafkaContext,
	MessagePattern,
	Payload,
} from '@nestjs/microservices';
import { AuthDto } from '@app/shared';

@Controller()
export class AuthServiceController {
	constructor(
		private readonly authServiceService: AuthServiceService,
	) {}

	@MessagePattern('register')
	async register(@Payload() dto: AuthDto) {
		return this.authServiceService.register(dto);
	}

	@MessagePattern('login')
	async login(
		@Payload() dto: AuthDto,
		@Ctx() ctx: KafkaContext,
	) {
		return this.authServiceService.login(dto, ctx);
	}
}
