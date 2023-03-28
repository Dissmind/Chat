import { Module } from '@nestjs/common';
import {MessageGateway} from "./message/message.gateway";
import { TypeOrmModule } from '@nestjs/typeorm';
import {DatabaseConfiguration} from "./database/databese-configuration";
import {MessageController} from "./message/message.controller";
import {MessageModule} from "./message/message.module";






@Module({
  imports: [
      TypeOrmModule.forRoot(DatabaseConfiguration),
      MessageModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}