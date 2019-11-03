import { Module } from '@nestjs/common';
import { ImageAPIController } from './image-api.controller';
import { ImageAPIService } from './image-api.service';
import { ImageTransformModule } from 'api/image-transform';
import { S3UploadModule } from 'api/s3-upload';

@Module({
    imports: [ImageTransformModule, S3UploadModule],
    controllers: [ImageAPIController],
    providers: [ImageAPIService]
})
export class ImageAPIModule { }