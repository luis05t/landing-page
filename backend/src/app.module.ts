import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PollutingGasesModule } from './polluting-gases/polluting-gases.module';

@Module({
  imports: [PrismaModule, PollutingGasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
