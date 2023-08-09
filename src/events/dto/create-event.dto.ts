import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto {

    @ApiProperty()
    event_id: string;

    @ApiProperty()
    title: string;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty()
    start_time: Date;

    @ApiProperty()
    end_time: Date;

    @ApiProperty({ required: false })
    location?: string;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;
}
