import {Module} from "@nestjs/common";
import {MessageController} from "./message.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MessageEntity} from "../database/entities/message.entity";
import {MessageGateway} from "./message.gateway";
import {MessageService} from "./message.service";



@Module({
    imports: [TypeOrmModule.forFeature([MessageEntity])],
    controllers: [MessageController],
    providers: [MessageGateway, MessageService]
})
export class MessageModule {}