import { Test, TestingModule } from '@nestjs/testing';
import { PollutingGasesService } from './polluting-gases.service';

describe('PollutingGasesService', () => {
  let service: PollutingGasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollutingGasesService],
    }).compile();

    service = module.get<PollutingGasesService>(PollutingGasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
