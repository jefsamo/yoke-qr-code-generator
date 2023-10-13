import { Controller, Get, Res } from '@nestjs/common';
import { QrService } from './qr.service';
import { Response } from 'express';
import * as qr from 'qrcode';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Get()
  async getQRCode(@Res() res: Response) {
    const movieUrl = `https://qr-code-fe-sigma.vercel.app/movies`;
    const qrCode = await qr.toDataURL(movieUrl);

    res.setHeader('Content-Type', 'image/png');
    res.send(Buffer.from(qrCode.split(',')[1], 'base64'));
  }
}
