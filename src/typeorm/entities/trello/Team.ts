import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { TrelloUser } from "./TrelloUser";


@Entity({ name: 'trello_team'})
export class Team {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;

    // @ManyToOne(()=>TrelloUser, (trelloUser) => trelloUser.teams)
    // user: TrelloUser

    @ManyToOne(()=>TrelloUser, (trelloUser)=>trelloUser.teams)
    users: TrelloUser[]
}