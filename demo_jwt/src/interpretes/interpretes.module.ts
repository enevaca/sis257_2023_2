import { Module } from '@nestjs/common';
import { InterpretesService } from './interpretes.service';
import { InterpretesController } from './interpretes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interprete } from './entities/interprete.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Interprete])],
  controllers: [InterpretesController],
  providers: [InterpretesService],
})
export class InterpretesModule {}
