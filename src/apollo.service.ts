import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ApolloClient from 'apollo-boost';
import 'cross-fetch/polyfill';

@Injectable()
export class ApolloService {
  client: ApolloClient<unknown>;

  constructor(private configService: ConfigService) {
    const gqlEndpoint = this.configService.get<string>('GQL_ENDPOINT');

    this.client = new ApolloClient({ uri: gqlEndpoint });
    this.client.defaultOptions = {
      query: {
        fetchPolicy: 'network-only'
      }
    };
  }
}
