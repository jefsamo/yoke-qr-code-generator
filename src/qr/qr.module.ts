import { Module } from '@nestjs/common';
import { QrController } from './qr.controller';
import { QrService } from './qr.service';
import { MovieModule } from 'src/movie/movie.module';

@Module({
  controllers: [QrController],
  providers: [QrService],
  imports: [MovieModule],
})
export class QrModule {}
