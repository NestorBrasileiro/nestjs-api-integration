import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigAppModule } from './config/config.module';

@Module({
  imports: [ScheduleModule.forRoot(), ConfigAppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
