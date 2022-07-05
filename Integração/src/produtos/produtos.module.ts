import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from 'src/config/http-config.service';
import { produtosProvider } from './produtos.provider';
import { EstoquesModule } from 'src/estoques/estoques.module';

@Module({
  imports: [
    EstoquesModule,
    ConfigModule,
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [ProdutosService, ...produtosProvider],
})
export class ProdutosModule {}
