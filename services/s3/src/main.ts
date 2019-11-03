import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, grpcClientOptions);

  await app.listenAsync();
}
bootstrap();
