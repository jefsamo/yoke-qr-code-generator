import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
  imports: [PrismaModule],
})
export class MovieModule {}
