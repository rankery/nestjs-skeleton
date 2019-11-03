import { Injectable, HttpService } from "@nestjs/common";
import { RpcException } from '@nestjs/microservices'
import { Readable, Writable } from "stream";
//import { SubClass, subClass } from 'gm'
var fs = require('fs')
    , gm = require('gm').subClass({ imageMagick: true });
@Injectable()
export class ImageTransformService {
    private gmInstance

    constructor(private readonly httpService: HttpService) {
        this.gmInstance = gm
        //   console.log(subClass({ imageMagick: true }))
    }

    async fetchImage(url: string): Promise<Readable> {
        try {
            let response = await this.httpService.get(url,
                { responseType: "stream" }).toPromise();

            if (!response.headers['content-type'].startsWith('image')) {
                throw new RpcException('Not image')
            }

            return response.data
        }
        catch (error) {
            throw new RpcException(error)
        }
    }



    resizeImage(stream: Readable, width: number, height: number): Writable {
        return gm(stream)
            .resize(width, height)
            .stream('png')
    }
}
