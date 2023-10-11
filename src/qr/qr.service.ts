import { Injectable } from '@nestjs/common';
import { MovieService } from 'src/movie/movie.service';

@Injectable()
export class QrService {
  constructor(private readonly movieService: MovieService) {}
  async getQRCodes() {
    const movies = await this.movieService.getMoviesTrim();

    return { result: movies.length, movies };
  }

  async getRandomMovies() {
    const randomMovies = await this.movieService.getRandomMovies(10);

    return { result: randomMovies.length, movies: randomMovies };
  }
}
