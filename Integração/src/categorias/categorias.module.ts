import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { categoriasProvider } from './categorias.provider';
import { ConfigModule } from '@nestjs/config';
import { HttpConfigService } from 'src/config/http-config.service';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [CategoriasService, ...categoriasProvider],
})
export class CategoriasModule {}
