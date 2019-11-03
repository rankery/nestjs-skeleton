import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog';

@Module({
    imports: [CatalogModule]
})
export class ApiModule { }