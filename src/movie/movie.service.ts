import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMovies() {
    const movies = await this.prismaService.movie.findMany();
    return movies;
  }

  async getRandomMovies(size: number) {
    const movies = await this.getMovies();

    // Shuffle the array using the Fisher-Yates algorithm.
    for (let i = movies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [movies[i], movies[j]] = [movies[j], movies[i]];
    }

    // Return the first 'numItems' items from the shuffled moviesay.
    return movies.slice(0, size);
  }
}
