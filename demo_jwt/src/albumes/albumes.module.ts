import { Module } from '@nestjs/common';
import { AlbumesService } from './albumes.service';
import { AlbumesController } from './albumes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Album])],
  controllers: [AlbumesController],
  providers: [AlbumesService],
})
export class AlbumesModule {}
