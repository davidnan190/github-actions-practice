import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @HttpCode(HttpStatus.OK)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  @HttpCode(HttpStatus.OK)
  getHealthcheck(): string {
    return 'ALL IS GOOD :D';
  }

  @Get('dummy')
  @HttpCode(HttpStatus.OK)
  getDummy(): string {
    return 'A dummy response';
  }
}
