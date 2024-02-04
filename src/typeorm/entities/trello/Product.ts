import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./Team";


@Entity({ name: 'trello_product'})
export class Product {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;

    @OneToOne(()=> Team)
    @JoinColumn()
    team: Team;
}