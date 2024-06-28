import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PollutingGasesService } from './polluting-gases.service';
import { CreatePollutingGasDto } from './dto/create-polluting-gas.dto';
import { UpdatePollutingGasDto } from './dto/update-polluting-gas.dto';

@Controller('polluting-gases')
export class PollutingGasesController {
  constructor(private readonly pollutingGasesService: PollutingGasesService) {}

  @Post()
  create(@Body() createPollutingGasDto: CreatePollutingGasDto) {
    return this.pollutingGasesService.create(createPollutingGasDto);
  }

  @Get()
  findAll() {
    return this.pollutingGasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pollutingGasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePollutingGasDto: UpdatePollutingGasDto) {
    return this.pollutingGasesService.update(+id, updatePollutingGasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollutingGasesService.remove(+id);
  }
}
