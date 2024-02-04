import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTrelloUserParam, UpdateUserParam } from 'src/trello/types/type';
import { Team } from 'src/typeorm/entities/trello/Team';
import { TrelloUser } from 'src/typeorm/entities/trello/TrelloUser';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(TrelloUser) private trelloUserRepository: Repository<TrelloUser>,
        @InjectRepository(Team) private teamRepository: Repository<Team>
    ) {}

    fetchUsers() {
        return this.trelloUserRepository.find({ relations: {teams: true}});
    }

    findUser(username: string) {
        return this.trelloUserRepository.findOneBy({username});
    }

    async createTrelloUser(createTrelloUserParam: CreateTrelloUserParam) {
        const password = encodePassword(createTrelloUserParam.password);
        const newTrelloUser = this.trelloUserRepository.create({...createTrelloUserParam, password});

        const { teams } = createTrelloUserParam;

        
        const newTeam = this.teamRepository.create(teams);
        console.log(newTeam[0].name);
        const savedTeam = await this.teamRepository.save(newTeam);
        newTrelloUser.teams = savedTeam;
        
        
        return this.trelloUserRepository.save(newTrelloUser);
    }

    updateUser(id: number, updateUserParam: UpdateUserParam) {
        return this.trelloUserRepository.update({id}, {...updateUserParam})
    }

    deleteUser(id: number) {
        return this.trelloUserRepository.update({id}, {deleted: true});
    }

    deactivateUser(id: number) {
        return this.trelloUserRepository.update({id}, {active: false});
    }

}
