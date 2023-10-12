import { Injectable } from '@nestjs/common';
import { MovieService } from 'src/movie/movie.service';

@Injectable()
export class QrService {
  constructor(private readonly movieService: MovieService) {}
  async getQRCode() {
    return;
  }
}
