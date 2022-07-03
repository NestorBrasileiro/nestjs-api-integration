import { Module } from '@nestjs/common';
import { mySqlProvider, postgresSqlProvider } from './database.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [...mySqlProvider, ...postgresSqlProvider],
  exports: [...mySqlProvider, ...postgresSqlProvider],
})
export class ConfigAppModule {}
