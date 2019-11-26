import { Injectable } from "@nestjs/common";
import { RpcException } from '@nestjs/microservices'
import { Stream, Writable, Readable } from "stream";
import { S3Handler } from "./s3-handler.service";

@Injectable()
export class S3UploadService {
    private s3Handler: S3Handler;
    constructor() {

    }
    async upload(Key: string, stream: Readable, transformFunctions: Function[]) {
        const { writeStream, uploaded } = this.s3Handler.writeStream({ Bucket: 'blocksport', Key })
        transformFunctions.map((transform: Function) => stream = transform(stream))
        stream
            .pipe(writeStream)
        //stream.pipe(writeStream)

        console.log(await uploaded)
        //const file = await this.s3.upload(params).promise()
        //console.log(file)
        return null
    }
}