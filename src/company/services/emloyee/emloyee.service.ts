import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/typeorm/entities/Company/Company';
import { Designation } from 'src/typeorm/entities/Company/Designation';
import { Employee } from 'src/typeorm/entities/Company/Employee';
import { EmployeeParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class EmloyeeService {
    constructor(
        @InjectRepository(Company) private companyRepository: Repository<Company>,
        @InjectRepository(Employee) private employeeRepository: Repository<Employee>,
        @InjectRepository(Designation) private designationRepository: Repository<Designation>
    ) {}

    fetchEmployees() {
        return this.employeeRepository.find();
    }

    fetchEmployeesWithCompany() {
        return this.employeeRepository.find({relations: ['company']});
    }
    
    async createEmployee(companyId: number, designationId: number, createEmployeeDetail: EmployeeParams) {
        const company = await this.companyRepository.findOneBy({id: companyId});
        if(!company) {
            throw new HttpException('Company not found', HttpStatus.BAD_REQUEST);
        }
        const designation = await this.designationRepository.findOneBy({id: designationId});
        if(!designation) {
            throw new HttpException('Designation not found', HttpStatus.BAD_REQUEST);
        }
        const newEmploee = this.employeeRepository.create({
            ...createEmployeeDetail,
            company,
            designation
        });
        return this.employeeRepository.save(newEmploee);
    }
}
