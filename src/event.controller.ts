import { Controller, Post } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('update-ratings')
  async updateRatings(): Promise<string> {
    await this.eventService.updateRatings();
    return 'done';
  }
}
