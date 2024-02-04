import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../services/auth/auth.service";
import { use } from "passport";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService
    ) {
        super();
    }

    async validate(username: string, password: string) {
        const user =  await this.authService.validateUser(username, password);
        if(!use) {
            return new UnauthorizedException();
        }
        return user;
    }
 }