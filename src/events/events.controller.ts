import { Controller, Post } from '@nestjs/common';
import { RatingService } from './rating/rating.service';

@Controller('events')
export class EventsController {
  constructor(private readonly ratingService: RatingService) {}

  @Post('update-ratings')
  async updateRatings(): Promise<string> {
    await this.ratingService.updateRatings();
    return 'done';
  }
}
