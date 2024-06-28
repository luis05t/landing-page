import { Module } from '@nestjs/common';
import { PollutingGasesService } from './polluting-gases.service';
import { PollutingGasesController } from './polluting-gases.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PollutingGasesController],
  providers: [PollutingGasesService],
  imports: [PrismaModule]
})
export class PollutingGasesModule {}
