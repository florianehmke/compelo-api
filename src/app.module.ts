import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApolloService } from './apollo.service';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [EventController],
  providers: [EventService, ApolloService],
})
export class AppModule {}
