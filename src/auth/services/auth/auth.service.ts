import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/trello/services/user/user.service';
import { comparePasswrod } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE') private userService: UserService) {}
    
    async validateUser(username: string, password: string) {
        const userFromDB = await this.userService.findUser(username);
        const matched = comparePasswrod(password, userFromDB.password);
        if(userFromDB && matched) {
            return userFromDB;
        }
        return null;
    }
}
