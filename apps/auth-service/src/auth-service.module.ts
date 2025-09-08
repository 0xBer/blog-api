import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import {
	ClientsModule,
	Transport,
} from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';

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
		JwtModule,
	],
	controllers: [AuthServiceController],
	providers: [AuthServiceService],
})
export class AuthServiceModule {}
