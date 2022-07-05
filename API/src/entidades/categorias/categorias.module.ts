import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { categoriasProviders } from './categorias.provider';

@Module({
  controllers: [CategoriasController],
  providers: [CategoriasService, ...categoriasProviders],
})
export class CategoriasModule {}
