import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { produtosProvider } from './produtos.provider';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService, ...produtosProvider],
})
export class ProdutosModule {}
