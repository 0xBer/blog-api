import {
	Inject,
	Injectable,
	OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

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

	async register(user: {
		name: string;
		password: string;
	}) {
		return await lastValueFrom(
			this.client.send('register', user),
		);
	}

	async login() {
		return { message: 'Login' };
	}

	async logout() {
		return { message: 'Logout' };
	}
}
