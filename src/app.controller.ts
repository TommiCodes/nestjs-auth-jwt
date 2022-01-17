import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Rest Call: GET http://localhost:8080/api/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
