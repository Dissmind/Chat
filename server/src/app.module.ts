import { Module } from '@nestjs/common';
import {MessageGateway} from "./message/message.gateway";
import { TypeOrmModule } from '@nestjs/typeorm';
import {DatabaseConfiguration} from "./database/database-configuration";
import {MessageController} from "./message/message.controller";
import {MessageModule} from "./message/message.module";
import {AuthModule} from "./auth/auth.module";






@Module({
  imports: [
      TypeOrmModule.forRoot(DatabaseConfiguration),
      MessageModule,
      AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}