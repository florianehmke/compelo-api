import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { updateRatings } from './update-ratings';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('events/update-ratings')
  async updateRatings(): Promise<string> {
    await updateRatings();
    return 'done';
  }
}
