import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigAppModule } from './config/config.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [ScheduleModule.forRoot(), ConfigAppModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
