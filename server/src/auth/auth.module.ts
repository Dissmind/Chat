import {AuthService} from "./auth.service";
import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {UserModule} from "./user.module";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MessageEntity} from "../database/entities/message.entity";



@Module({
    imports: [
        UserModule,
        TypeOrmModule.forFeature([MessageEntity]),
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' }
        })
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}