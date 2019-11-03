// import { Test, TestingModule } from '@nestjs/testing'
// import { ImageTransformService } from './image-transform.service';
// import { HttpService, HttpModule } from '@nestjs/common';
// import { RpcException } from '@nestjs/microservices';
// import { Stream } from 'stream';

// describe('B64Service', () => {
//     let service: ImageTransformService

//     beforeAll(async () => {
//         const module: TestingModule = await Test.createTestingModule({
//             providers: [
//                 ImageTransformService,
//             ],
//             imports: [HttpModule]
//         }).compile()
//         service = module.get<ImageTransformService>(ImageTransformService)
//     })

//     it('should fetch image and return Stream', async () => {
//         let response = service.fetch('https://kinsta.com/wp-content/uploads/2017/04/change-wordpress-url-1.png')
//         expect(response).resolves.toBeInstanceOf(Stream)
//     })
//     it('should throw exception  when non-image URL provided', async () => {
//         let response = service.fetch('https://github.com/rankery/wheel-server/blob/master/src/user/user.service.spec.ts')
//         expect(response).rejects.toThrowError('Not image')
//     })
//     it('should throw exception when url is corrupted', async () => {
//         let response = service.fetch('https://www.w3schools.com/nodejs/met_bu')
//         expect(response).rejects.toThrowError('Request failed with status code 40')
//     })

//     it('should return transform stream', () => {
//         let response = service.resize(100, 100)
//         expect(response).toBeInstanceOf(Stream)
//     })

// })