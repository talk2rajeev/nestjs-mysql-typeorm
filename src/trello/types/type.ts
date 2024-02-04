export type CreateTrelloUserParam = {
    fname: string;
    lname: string;
    username: string;
    password: string;
    teams: CreateTeamParam[];
}

export type UpdateUserParam = {
    fname: string;
    lname: string;
    password: string;
}

export type CreateTeamParam = {
    name: string;
}

export type CreateProductParam = {
    name: string;
}