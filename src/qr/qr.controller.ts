import { Controller, Get, Res } from '@nestjs/common';
import { QrService } from './qr.service';
import { Response } from 'express';
import * as qr from 'qrcode';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Get()
  getQRCode(@Res() res: Response) {
    const movieUrl = `https://qr-code-fe-sigma.vercel.app/movies`;
    qr.toDataURL(movieUrl, (err, url) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error generating QR code');
      } else {
        res.send(url);
      }
    });
  }
}
