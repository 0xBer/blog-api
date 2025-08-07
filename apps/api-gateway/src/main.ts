import { NestFactory } from '@nestjs/core';
import { AppModule } from './api-gateway.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix('api/v1');

	const PORT = process.env.PORT || 3000;

	await app.listen(PORT, () =>
		console.log(
			`[CONSOLE] api-gateway is running on port ${PORT}`,
		),
	);
}
bootstrap();
