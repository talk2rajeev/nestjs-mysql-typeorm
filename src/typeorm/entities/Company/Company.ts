import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./Employee";

@Entity({ name: 'company'})
export class Company {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @OneToMany(()=>Employee, (employee)=> employee.company)
    employees: Employee[];
}