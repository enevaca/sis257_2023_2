import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genero])],
  controllers: [GenerosController],
  providers: [GenerosService],
})
export class GenerosModule {}
