import { Module } from '@nestjs/common';
import { mySqlProvider } from './database.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [...mySqlProvider],
  exports: [...mySqlProvider],
})
export class ConfigAppModule {}
