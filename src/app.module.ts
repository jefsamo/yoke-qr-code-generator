import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { QrModule } from './qr/qr.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MovieModule, QrModule, ConfigModule.forRoot(), PrismaModule],
  controllers: [AppController],
  providers: [AppService],
  // imports: [ConfigModule.forRoot()],
})
export class AppModule {}
