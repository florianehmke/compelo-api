import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EventsController } from './events.controller';
import { RatingService } from './rating/rating.service';

@Module({
  imports: [ConfigModule],
  controllers: [EventsController],
  providers: [RatingService],
})
export class EventsModule {}
