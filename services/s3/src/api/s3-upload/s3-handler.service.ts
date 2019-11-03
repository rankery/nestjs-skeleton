import * as AWS from "aws-sdk";
import stream, { Stream } from "stream";

export class S3Handler {
    private s3: AWS.S3
    constructor(credentials: S3Credentials) {
        this.s3 = new AWS.S3(credentials)
    }

    readStream({ Bucket, Key }) {
        return this.s3.getObject({ Bucket, Key }).createReadStream();
    }

    writeStream({ Bucket, Key }) {
        const passThrough = new Stream.PassThrough();
        return {
            writeStream: passThrough,
            uploaded: this.s3.upload({
                ContentType: "image/png",
                Body: passThrough,
                Bucket,
                Key,
                ACL: 'public-read'
            }).promise()
        };
    }
}
export interface S3Credentials {
    accessKeyId: string,
    secretAccessKey: string
}