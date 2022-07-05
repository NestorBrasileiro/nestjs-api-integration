import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { produtosProvider } from './produtos.provider';
import { EstoquesModule } from '../estoques/estoques.module';

@Module({
  imports: [EstoquesModule],
  controllers: [ProdutosController],
  providers: [ProdutosService, ...produtosProvider],
})
export class ProdutosModule {}
