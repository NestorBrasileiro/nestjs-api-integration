import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { postgresSqlProvider } from './database.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [...postgresSqlProvider],
  exports: [...postgresSqlProvider],
})
export class ConfigAppModule {}
