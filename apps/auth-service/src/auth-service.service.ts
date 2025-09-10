import { AuthDto } from '@app/shared';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServiceService {
	constructor(
		@Inject('KAFKA_SERVICE')
		private jwtService: JwtService,
		private configService: ConfigService,
	) {}

	async register(dto: AuthDto) {
		const token = this.signToken(dto);
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
					secret: this.configService.get(
						'JWT_SECRET',
					),
					expiresIn: 60 * 60 * 2,
				},
			),
		};
	}
}
