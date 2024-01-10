import { Body, Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';
import { DesignationDto } from 'src/company/dtos/Designation.dto';
import { DesignationService } from 'src/company/services/designation/designation.service';

@Controller('designation')
export class DesignationController {
    constructor(private designationService: DesignationService) {}

    @Get()
    getDesignations() {
        this.designationService.fetchDesignation();
    }

    @Post()
    createDesignation(@Body() createDdesignationDto: DesignationDto) {
        return this.designationService.createDesignation(createDdesignationDto);
    }
}
