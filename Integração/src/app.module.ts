import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigAppModule } from './config/config.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProdutosModule } from './produtos/produtos.module';
import { EstoquesModule } from './estoques/estoques.module';

@Module({
  imports: [ScheduleModule.forRoot(), ConfigAppModule, CategoriasModule, ProdutosModule, EstoquesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
