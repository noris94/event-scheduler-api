import { Event } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class EventEntity implements Event {
    @ApiProperty()
    event_id: string;

    @ApiProperty()
    title: string;

    @ApiProperty({ required: false, nullable: true })
    description: string | null;

    @ApiProperty()
    start_time: Date;

    @ApiProperty()
    end_time: Date;

    @ApiProperty({ required: false, nullable: true })
    location: string | null;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;
}
