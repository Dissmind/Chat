import {
    TypeOrmModuleOptions
} from "@nestjs/typeorm";
import {MessageEntity} from "./entities/message.entity";
import {UserEntity} from "./entities/user.entity";




export const DatabaseConfiguration: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'chat',


    entities: [
        MessageEntity,
        UserEntity
    ],


    // synchronize: true,
    // autoLoadEntities: true
}