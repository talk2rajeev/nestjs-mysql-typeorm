import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeamParam } from 'src/trello/types/type';
import { Team } from 'src/typeorm/entities/trello/Team';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {
    constructor(@InjectRepository(Team) private teamRepository: Repository<Team>) {}

    fetchTeams() {
        return this.teamRepository.find();
    }

    createTeam(createTeamParam: CreateTeamParam) {
        const newTeam =  this.teamRepository.create(createTeamParam);
        return this.teamRepository.save(newTeam);
    }
}
