import { AuthDto } from '@app/shared';
import {
	Inject,
	Injectable,
	OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { last, lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService implements OnModuleInit {
	constructor(
		@Inject('KAFKA_SERVICE')
		private readonly client: ClientKafka,
	) {}

	async onModuleInit() {
		this.client.subscribeToResponseOf('register');
		this.client.subscribeToResponseOf('login');
		this.client.subscribeToResponseOf('logout');
		await this.client.connect();
	}

	async register(dto: AuthDto) {
		const data = lastValueFrom(
			this.client.send('register', dto),
		);

		return data;
	}

	async login(dto: AuthDto) {
		const jwt = 'test.token.ms';

		// return await lastValueFrom(
		// 	this.client.send('login', {
		// 		value: dto,
		// 		headers: { Authorization: `Bearer ${jwt}` },
		// 	}),
		// );

		// return await lastValueFrom(
		// 	this.client.send('login', dto),
		// );
	}

	async logout() {
		return 'Loged out';
	}
}
