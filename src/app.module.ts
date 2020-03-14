import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './events/events.module';

@Module({
  imports: [ConfigModule.forRoot(), EventsModule]
})
export class AppModule {}
