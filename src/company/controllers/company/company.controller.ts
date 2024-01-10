import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyDto } from 'src/company/dtos/Company.dto';
import { CompanyService } from 'src/company/services/company/company.service';

@Controller('company')
export class CompanyController {

    constructor(private companyService: CompanyService) {}

    @Get()
    getCompanyList() {
        return this.companyService.fetchCompanies();
    }

    @Get('detail')
    getCompanyWithEmployee() {
        return this.companyService.fetchCompaniesWithEmployees();
    }

    @Post()
    createCompany(@Body() createCompanyDto: CompanyDto) {   
        return this.companyService.createCompany(createCompanyDto);
    }
}
