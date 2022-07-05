import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { postgresSqlProvider } from './database.provider';
import { HttpConfigService } from './http-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [...postgresSqlProvider, HttpConfigService],
  exports: [...postgresSqlProvider, HttpConfigService],
})
export class ConfigAppModule {}
