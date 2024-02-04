import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./Team";


@Entity({ name: 'trello_user'})
export class TrelloUser {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    fname: string;

    @Column()
    lname: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({default: false})
    deleted: boolean

    @Column({default: true})
    active: boolean

    @OneToMany(()=>Team, (team)=>team.users, {cascade: true})
    @JoinTable()
    teams: Team[]

}