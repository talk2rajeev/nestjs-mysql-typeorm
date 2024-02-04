import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/typeorm/entities/Company/Company';
import { CompanyParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(Company) private companyRepository: Repository<Company>) {}

    fetchCompanies() {
        return this.companyRepository.find();
    }

    fetchCompaniesWithEmployees() {
        return this.companyRepository.find({relations: ['employees']});
    }

    createCompany(companyDetail: CompanyParams) {
        const newCompany = this.companyRepository.create(companyDetail);
        console.log(newCompany);
        return this.companyRepository.save(newCompany);
    }
}
