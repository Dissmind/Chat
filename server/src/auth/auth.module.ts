import {AuthService} from "./auth.service";
import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {UserModule} from "./user.module";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MessageEntity} from "../database/entities/message.entity";
import {UserEntity} from "../database/entities/user.entity";



@Module({
    imports: [
        UserModule,
        TypeOrmModule.forFeature([UserEntity]),
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