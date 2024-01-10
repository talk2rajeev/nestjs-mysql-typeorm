import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { EmployeeDto } from 'src/company/dtos/Employee.dto';
import { EmloyeeService } from 'src/company/services/emloyee/emloyee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmloyeeService) {}

    @Get()
    fetchEmployee() {
        return this.employeeService.fetchEmployees();
    }

    @Get('detail')
    fetchEmployeeWithCompany() {
        return this.employeeService.fetchEmployeesWithCompany();
    }

    @Post()
    createEmployee(@Body() employeeDTO: EmployeeDto) {
        const {companyId, designationId, ...employeeDetail} = employeeDTO;
        return this.employeeService.createEmployee(companyId, designationId, employeeDetail);
    }
}
