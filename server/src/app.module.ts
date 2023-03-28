import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppGateway} from "./app.gateway";
import { TypeOrmModule } from '@nestjs/typeorm';
import {DatabaseConfiguration} from "./database/databese-configuration";
import {MessageService} from "./message.service";
import {MessageController} from "./message.controller";
import {DataSource} from "typeorm";
import {MessageEntity} from "./database/entities/message.entity";



export const MessageProviders = [{
    provide: 'MESSAGE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(MessageEntity),
}]




@Module({
  imports: [
      TypeOrmModule.forRoot(DatabaseConfiguration),

      TypeOrmModule.forFeature([MessageEntity])
  ],
  controllers: [AppController, MessageController],
  providers: [AppService, MessageService, AppGateway],
})
export class AppModule {
    constructor(private dataSource: DataSource) {
        // MessageProviders['MESSAGE_REPOSITORY'].useFactory(dataSource)
    }
}