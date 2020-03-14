import { Module } from '@nestjs/common';

import { ApolloModule } from '../apollo.module';
import { EventsController } from './events.controller';
import { RatingService } from './rating/rating.service';

@Module({
  imports: [ApolloModule],
  controllers: [EventsController],
  providers: [RatingService]
})
export class EventsModule {}
