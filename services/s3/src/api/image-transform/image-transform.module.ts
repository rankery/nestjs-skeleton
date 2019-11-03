import { Module, HttpModule } from '@nestjs/common';
import { ImageTransformService } from './image-transform.service';

@Module({
    imports: [HttpModule],
    providers: [ImageTransformService],
    exports: [ImageTransformService]
})
export class ImageTransformModule { }