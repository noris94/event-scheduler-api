import { ApiProperty } from "@nestjs/swagger";
import {
    IsDateString,
    IsNotEmpty,
    IsOptional,
    IsString
} from 'class-validator';

export class CreateEventDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    description: string;

    @ApiProperty()
    @IsDateString()
    start_time: Date;

    @ApiProperty()
    @IsDateString()
    end_time: Date;

    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    location: string;

}
