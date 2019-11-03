import { MockType } from '../mock.type';
//import { B64Service } from '../../src/api/image-transform/image-transform.service';
// import { UserService } from '@src/user/user.service';
// import { AuthService } from '@src/auth/auth.service';
// import { JwtService } from '@nestjs/jwt';
// import { Repository } from 'typeorm';

// // @ts-ignore
// export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
//     find: jest.fn(),
//     findOne: jest.fn(),
//     create: jest.fn(entity => entity),
//     save: jest.fn(entity => entity),
//     delete: jest.fn(() => Promise.resolve()),
//     queryRunner: jest.fn(),
//     metadata: jest.fn(),
//     manager: jest.fn(),
// }));

// export const bcryptServiceFactory: () => MockType<BcryptService> = jest.fn(() => ({
//     hash: jest.fn(),
//     checkEncryptedData: jest.fn(),
// }));

export const b64ServiceFactory: () => MockType<B64Service> = jest.fn(() => ({
    fetch: jest.fn(),
    resize: jest.fn(),
}));

// export const authServiceFactory: () => MockType<AuthService> = jest.fn(() => ({
//     logIn: jest.fn(),
//     createToken: jest.fn(),
//     validateUser: jest.fn(),
// }));

// export const jwtServiceFactory: () => MockType<JwtService> = jest.fn(() => ({
//     sign: jest.fn(),
//     signAsync: jest.fn(),
//     verify: jest.fn(),
//     verifyAsync: jest.fn(),
//     decode: jest.fn(),
// }));