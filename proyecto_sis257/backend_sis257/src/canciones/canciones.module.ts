import { Module } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CancionesController } from './canciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cancion } from './entities/cancion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cancion])],
  controllers: [CancionesController],
  providers: [CancionesService],
})
export class CancionesModule {}
