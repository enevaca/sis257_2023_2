import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';

@Module({
  controllers: [GenerosController],
  providers: [GenerosService],
})
export class GenerosModule {}
