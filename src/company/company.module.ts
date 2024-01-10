import { Module } from '@nestjs/common';
import { CompanyController } from './controllers/company/company.controller';
import { CompanyService } from './services/company/company.service';
import { EmployeeController } from './controllers/employee/employee.controller';
import { EmloyeeService } from './services/emloyee/emloyee.service';
import { DesignationController } from './controllers/designation/designation.controller';
import { DesignationService } from './services/designation/designation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/typeorm/entities/Company/Employee';
import { Company } from 'src/typeorm/entities/Company/Company';
import { Designation } from 'src/typeorm/entities/Company/Designation';

@Module({
  imports: [TypeOrmModule.forFeature([ Company, Employee, Designation])],
  controllers: [CompanyController, EmployeeController, DesignationController],
  providers: [CompanyService, EmloyeeService, DesignationService]
})
export class CompanyModule {}
//TypeOrmModule.forFeature([User, Profile, Post])]
