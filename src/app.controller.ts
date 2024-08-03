import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  @HttpCode(HttpStatus.OK)
  getHeatchcheck(): string {
    return 'ALL IS GOOD :D';
  }
}
