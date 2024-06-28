import { PartialType } from '@nestjs/swagger';
import { CreatePollutingGasDto } from './create-polluting-gas.dto';

export class UpdatePollutingGasDto extends PartialType(CreatePollutingGasDto) {}
