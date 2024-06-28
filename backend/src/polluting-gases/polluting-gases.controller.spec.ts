import { Test, TestingModule } from '@nestjs/testing';
import { PollutingGasesController } from './polluting-gases.controller';
import { PollutingGasesService } from './polluting-gases.service';

describe('PollutingGasesController', () => {
  let controller: PollutingGasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollutingGasesController],
      providers: [PollutingGasesService],
    }).compile();

    controller = module.get<PollutingGasesController>(PollutingGasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
