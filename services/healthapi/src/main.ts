import { Transport } from '@nestjs/common/enums/transport.enum';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,
    new FastifyAdapter()
  );
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: { retryAttempts: 5, retryDelay: 1000 }
  });

  await app.listen(4200, '0.0.0.0');
}
bootstrap();
