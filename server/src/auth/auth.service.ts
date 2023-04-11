import {Injectable, UnauthorizedException} from "@nestjs/common";
import {UserService} from "./user.service";
import {JwtService} from "@nestjs/jwt";
import {InjectRepository} from "@nestjs/typeorm";
import {MessageEntity} from "../database/entities/message.entity";
import {Repository} from "typeorm";
import {UserEntity} from "../database/entities/user.entity"
import * as bcrypt from 'bcrypt'
import {passwordSalt} from "./constants";


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        @InjectRepository(MessageEntity)
        private userRepository: Repository<UserEntity>
    ) {}


    async signIn(login: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(login)

        if (user?.password !== pass) {
            throw new UnauthorizedException()
        }

        const payload = { username: user.username, sub: user.userId }

        return {
            accessToken: await this.jwtService.signAsync(payload),
        }
    }


    async registration(dto: UserRegistrationDto) {
        // TODO: validation
        const user = new UserEntity()
        user.userName = dto.nickname
        user.passwordHash = await bcrypt.hash(dto.password, passwordSalt)

        const createdUserEntity: UserEntity = await this.userRepository.create(user)
        await this.userRepository.save(createdUserEntity)

        return createdUserEntity
    }
}