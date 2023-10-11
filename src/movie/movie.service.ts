import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface Movie {
  title: string;
  backdrop_path: string;
  overview: string;
}

@Injectable()
export class MovieService {
  async getMovies() {
    const token = process.env.IMDB_TOKEN;
    const movies = await axios.get(
      'https://api.themoviedb.org/3/discover/movie',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return movies?.data?.results;
  }

  async getMoviesTrim() {
    const movies = await this.getMovies();
    const newMovies = [];
    movies.map((movie: Movie) => {
      return newMovies.push({
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        overview: movie.overview,
      });
    });
    return newMovies;
  }

  async getRandomMovies(size: number) {
    const movies = await this.getMoviesTrim();

    // Shuffle the array using the Fisher-Yates algorithm.
    for (let i = movies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [movies[i], movies[j]] = [movies[j], movies[i]];
    }

    // Return the first 'numItems' items from the shuffled moviesay.
    return movies.slice(0, size);
  }
}
