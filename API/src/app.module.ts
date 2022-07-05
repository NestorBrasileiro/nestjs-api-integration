import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigAppModule } from './config/config.module';
import { CategoriasModule } from './entidades/categorias/categorias.module';

@Module({
  imports: [ConfigAppModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService, ConfigAppModule],
})
export class AppModule {}
