import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { ImageAPIService } from './image-api.service';

@Controller()
export class ImageAPIController {
  constructor(private readonly imageApiService: ImageAPIService) { }
  @EventPattern('test')
  public async getCatalogItems(data) {
    return this.imageApiService.uploadToS3(data.imageUrl, data.imageName, data.size)
  }
}
