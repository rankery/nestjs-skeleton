import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';

@Module({
    imports: [],
    controllers: [CatalogController]
})
export class CatalogModule { }