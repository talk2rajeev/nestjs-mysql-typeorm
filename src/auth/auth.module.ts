import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { UserService } from 'src/trello/services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrelloUser } from 'src/typeorm/entities/trello/TrelloUser';
import { LocalStrategy } from './utils/LocalStrategy';
import { TeamService } from 'src/trello/services/team/team.service';
import { Team } from 'src/typeorm/entities/trello/Team';

@Module({
  imports:[TypeOrmModule.forFeature([TrelloUser, Team])],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
    {
      provide: 'USER_SERVICE',
      useClass: UserService
    },
    LocalStrategy
  ]
})
export class AuthModule {}
