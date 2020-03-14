import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApolloService } from './apollo.service';

@Module({
  imports: [ConfigModule],
  providers: [ApolloService],
  exports: [ApolloService]
})
export class ApolloModule {}
