import {
    TypeOrmModuleOptions
} from "@nestjs/typeorm";
import {MessageEntity} from "./entities/message.entity";




export const DatabaseConfiguration: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'chat',


    entities: [
        MessageEntity
    ],


    // synchronize: true,
    // autoLoadEntities: true
}