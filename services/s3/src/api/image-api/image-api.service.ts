import { Injectable, HttpService } from "@nestjs/common";
import { RpcException } from '@nestjs/microservices'
import { ImageTransformService } from '../image-transform/image-transform.service'
import { S3UploadService } from "api/s3-upload/s3-upload.service";
import * as fs from 'fs'
@Injectable()
export class ImageAPIService {
    constructor(private readonly imageTransformService: ImageTransformService,
        private readonly s3UploadService: S3UploadService) { }
    async uploadToS3(imageUrl: string,
        imageName: string,
        size: { width: number, height: number }) {
        let transformFunctions = [];
        const stream = await this.imageTransformService.fetchImage(imageUrl)

        if (size) {
            transformFunctions.push(this.imageTransformService.resizeImage)
        }

        let response = await this.s3UploadService.upload(imageName, stream, transformFunctions)

    }
}