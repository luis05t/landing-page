import { ApiProperty } from "@nestjs/swagger";
import { IsString, isString } from "class-validator";

export class CreatePollutingGasDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    nomenclature: string;
}
