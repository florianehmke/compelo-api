import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async updateRatings(): Promise<{ access_token: string }> {
    return this.authService.login();
  }
}
