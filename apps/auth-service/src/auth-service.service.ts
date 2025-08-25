import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthServiceService {
	constructor(
		@Inject('KAFKA_SERVICE')
		private readonly client: ClientKafka,
	) {}

	async register(data: any) {
		return data;
	}

	async login() {
		return 'Loged in';
	}

	async logout() {
		return 'Loged out';
	}
}
