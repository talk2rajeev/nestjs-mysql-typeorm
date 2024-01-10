import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company";
import { Designation } from "./Designation";

@Entity({ name: 'employee'})
export class Employee {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToOne(()=>Company, (company)=>company.employees)
    company: Company

    @ManyToOne(()=>Designation, (designation)=>designation.employee)
    designation: Designation
}