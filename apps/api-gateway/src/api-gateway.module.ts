import {
	MiddlewareConsumer,
	Module,
	NestModule,
} from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { NextFunction, Request, Response } from 'express';
import {
	ClientsModule,
	Transport,
} from '@nestjs/microservices';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'AUTH_SERVICE',
				transport: Transport.KAFKA,
				options: {
					client: {
						clientId: 'auth',
						brokers: ['localhost:9092'],
					},
				},
			},
		]),
	],
	controllers: [AuthController, PostController],
	providers: [AuthService, PostService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(
				(
					req: Request,
					res: Response,
					next: NextFunction,
				) => {
					console.log(
						`${new Date().toLocaleTimeString()} | ${req.method} Request was made on ${req.baseUrl.replace('/api/v1', '')}`,
					);
					next();
				},
			)
			.forRoutes('*');
	}
}
