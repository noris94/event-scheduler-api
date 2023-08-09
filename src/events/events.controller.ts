import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EventEntity } from './entities/event.entity';

@Controller('events')
@ApiTags('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }

  @Post()
  @ApiCreatedResponse({ type: EventEntity })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  @ApiOkResponse({ type: EventEntity, isArray: true })
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: EventEntity })
  async findOne(@Param('id') id: string) {
    const event = await this.eventsService.findOne(id);
    if (!event) {
      throw new NotFoundException(`Event with Id ${id} does not exist.`);
    }
    return event;
  }

  @Put(':id')
  @ApiOkResponse({ type: EventEntity })
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: EventEntity })
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}
