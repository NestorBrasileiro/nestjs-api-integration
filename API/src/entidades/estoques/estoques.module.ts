import { Module } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { estoquesProvider } from './estoques.provider';

@Module({
  providers: [EstoquesService, ...estoquesProvider],
  exports: [EstoquesService],
})
export class EstoquesModule {}
