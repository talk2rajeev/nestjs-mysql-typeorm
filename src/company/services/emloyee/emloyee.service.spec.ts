import { Test, TestingModule } from '@nestjs/testing';
import { EmloyeeService } from './emloyee.service';

describe('EmloyeeService', () => {
  let service: EmloyeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmloyeeService],
    }).compile();

    service = module.get<EmloyeeService>(EmloyeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
