import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigAppModule } from './config/config.module';
import { CategoriasModule } from './entidades/categorias/categorias.module';
import { ProdutosModule } from './entidades/produtos/produtos.module';
import { EstoquesModule } from './entidades/estoques/estoques.module';

@Module({
  imports: [ConfigAppModule, CategoriasModule, ProdutosModule, EstoquesModule],
  controllers: [AppController],
  providers: [AppService, ConfigAppModule],
})
export class AppModule {}
