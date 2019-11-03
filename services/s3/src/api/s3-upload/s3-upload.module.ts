import { Module, HttpModule } from '@nestjs/common';
import { S3UploadService } from './s3-upload.service';
import { ConfigModule } from 'config';

@Module({
    imports: [HttpModule, ConfigModule],
    providers: [S3UploadService],
    exports: [S3UploadService]
})
export class S3UploadModule { }