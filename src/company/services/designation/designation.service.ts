import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Designation } from 'src/typeorm/entities/Company/Designation';
import { Employee } from 'src/typeorm/entities/Company/Employee';
import { DesignationParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class DesignationService {
    constructor(
        @InjectRepository(Employee) private employeeResitory: Repository<Employee>,
        @InjectRepository(Designation) private designationRepository: Repository<Designation>
    ) {}

    fetchDesignation() {
        this.designationRepository.find();
    }

    async createDesignation(designationDetail: DesignationParams) {
        const newDesignation = this.designationRepository.create(designationDetail);
        return this.designationRepository.save(newDesignation);
    }
}
