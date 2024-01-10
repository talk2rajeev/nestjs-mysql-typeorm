import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./Employee";

@Entity({ name: 'designation'})
export class Designation {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    designation: string;

    @OneToMany(()=>Employee, (employee)=>employee.designation)
    employee: Employee[];
}
