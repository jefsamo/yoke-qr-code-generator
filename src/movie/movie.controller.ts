import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  @Get()
  getMovies() {
    return this.movieService.getMovies();
  }

  @Get('random')
  getRandomMovies() {
    return this.movieService.getRandomMovies(10);
  }
}
