import {Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}


    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.login, signInDto.password)
    }


    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile() {
        return 'test'
    }



    @Post('registration')
    async registration(@Body() dto: UserRegistrationDto) {
        await this.authService.registration(dto)
    }
}

