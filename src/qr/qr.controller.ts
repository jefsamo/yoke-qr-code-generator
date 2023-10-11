import { Controller, Get } from '@nestjs/common';
import { QrService } from './qr.service';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Get()
  getQRCodes() {
    return this.qrService.getQRCodes();
  }

  @Get('random')
  getRandomMovies() {
    return this.qrService.getRandomMovies();
  }
}
