import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller('hello')
@ApiTags('안녕하세요')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: '유저 생성 API', description: '유저를 생성한다.' })
  @ApiCreatedResponse({ description: '유저를 생성한다.', type: String })
  getHello(): string {
    return this.appService.getHello();
  }
}
