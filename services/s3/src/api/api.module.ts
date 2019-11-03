import { Module } from '@nestjs/common';
import { ImageAPIModule } from './image-api';

@Module({
    imports: [ImageAPIModule]
})
export class ApiModule { }