import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import {
	ClientsModule,
	Transport,
} from '@nestjs/microservices';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'KAFKA_SERVICE',
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
		]),
	],
	controllers: [AuthServiceController],
	providers: [AuthServiceService],
})
export class AuthServiceModule {}
