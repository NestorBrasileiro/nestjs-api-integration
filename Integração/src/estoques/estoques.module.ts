import { Module } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { estoqueProvider } from './estoque.provider';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from 'src/config/http-config.service';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [EstoquesService, ...estoqueProvider],
  exports: [EstoquesService],
})
export class EstoquesModule {}
