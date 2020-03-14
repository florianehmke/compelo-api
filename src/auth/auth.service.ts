import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApolloService } from '../apollo.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private apolloService: ApolloService
  ) {}

  async login(): Promise<{ access_token: string }> {
    return {
      access_token: this.jwtService.sign({})
    };
  }
}
