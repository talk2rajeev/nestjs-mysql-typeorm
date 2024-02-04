import { CreateTeamParam } from "../types/type";

export class CreateTrelloUserDto {
    fname: string;
    lname: string;
    username: string;
    password: string;
    teams: CreateTeamParam[];
}