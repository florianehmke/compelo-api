import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApolloService } from './apollo.service';
import { EventsModule } from './events/events.module';

@Module({
  imports: [ConfigModule.forRoot(), EventsModule],
  providers: [ApolloService],
})
export class AppModule {}
