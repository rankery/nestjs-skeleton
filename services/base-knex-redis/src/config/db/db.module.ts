import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvModule } from 'config/env';
import { EnvService } from 'config/env/env.service';

@Module({
    imports: [TypeOrmModule.forRootAsync({
        imports: [EnvModule],
        inject: [EnvService],
        useFactory: async (envService: EnvService) => ({
            type: envService.get('DB_DRIVER'),
            host: envService.get('DB_HOST'),
            port: +envService.get('DB_PORT'),
            username: envService.get('DB_USER'),
            password: envService.get('DB_PASSWORD'),
            database: envService.get('DB_NAME'),
            entities: ['**/*.entity{.ts,.js}'],
            synchronize: false,
            migrationsRun: true,
            migrationsTableName: 'migration',
            migrations: ['src/migration/*.ts'],

            cli: {
                migrationsDir: 'src/migration',
            },
            ssl: this.isProduction(),

        } as TypeOrmModuleOptions)
    })]
})
export class ConfigModule { }