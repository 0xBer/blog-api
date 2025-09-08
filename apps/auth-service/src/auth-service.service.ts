import { AuthDto } from '@app/shared';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
	ClientKafka,
	KafkaContext,
} from '@nestjs/microservices';

@Injectable()
export class AuthServiceService {
	constructor(
		@Inject('KAFKA_SERVICE')
		private readonly client: ClientKafka,
		private jwtService: JwtService,
	) {}

	async register(dto: AuthDto) {
		const token = await this.signToken(dto);
		return token;
	}

	async login(dto: AuthDto) {
		return dto;
	}

	async signToken(payload: AuthDto) {
		return {
			access_token: await this.jwtService.signAsync(
				payload,
				{
					secret: 'asd',
					expiresIn: 60 * 60 * 2,
				},
			),
		};
	}
}
