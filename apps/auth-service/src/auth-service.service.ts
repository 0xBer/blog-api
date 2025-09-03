import { AuthDto } from '@app/shared';
import { Inject, Injectable } from '@nestjs/common';
import {
	ClientKafka,
	KafkaContext,
} from '@nestjs/microservices';

@Injectable()
export class AuthServiceService {
	constructor(
		@Inject('KAFKA_SERVICE')
		private readonly client: ClientKafka,
	) {}

	async register(dto: AuthDto) {
		return dto;
	}

	async login(dto: AuthDto) {
		return dto;
	}
}
