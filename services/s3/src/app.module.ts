import { Module } from '@nestjs/common';
import { ConfigModule } from './config';
import { ApiModule } from './api';

@Module({
  imports: [
    ApiModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { }
