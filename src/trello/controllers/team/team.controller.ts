import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTeamDto } from 'src/trello/dtos/CreateTeam.dto';
import { TeamService } from 'src/trello/services/team/team.service';

@Controller('team')
export class TeamController {
    constructor(private teamService: TeamService) {}
    
    @Get()
    async getTeamList() {
        const teams = await this.teamService.fetchTeams();
        return teams;
    }

    @Post() 
    createTeam(@Body() createTeamDto: CreateTeamDto) {
        return this.teamService.createTeam(createTeamDto);
    }
}
