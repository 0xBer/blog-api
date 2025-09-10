import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import {
	MicroserviceOptions,
	Transport,
} from '@nestjs/microservices';

async function bootstrap() {
	const app =
		await NestFactory.createMicroservice<MicroserviceOptions>(
			AuthServiceModule,
			{
				transport: Transport.KAFKA,
				options: {
					client: {
						clientId: 'auth-service',
						brokers: ['localhost:9094'],
					},
					consumer: {
						groupId: 'auth-service-consumer',
					},
				},
			},
		);

	await app.listen();
}
bootstrap();
