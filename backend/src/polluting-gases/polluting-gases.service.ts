import { Injectable } from '@nestjs/common';
import { CreatePollutingGasDto } from './dto/create-polluting-gas.dto';
import { UpdatePollutingGasDto } from './dto/update-polluting-gas.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PollutingGasesService {
  constructor(private prisma: PrismaService){}

  create(createPollutingGasDto: CreatePollutingGasDto) {
    return this.prisma.pollutingGases.create({data: createPollutingGasDto});
  }

  findAll() {
    return this.prisma.pollutingGases.findMany();
  }

  findOne(id: number) {
    return this.prisma.pollutingGases.findUnique({where: {id}});
  }

  update(id: number, updatePollutingGasDto: UpdatePollutingGasDto) {
    return this.prisma.pollutingGases.update({
      where: {id},
      data: updatePollutingGasDto});
  }

  remove(id: number) {
    return this.prisma.pollutingGases.delete({where: {id}});
  }
}
