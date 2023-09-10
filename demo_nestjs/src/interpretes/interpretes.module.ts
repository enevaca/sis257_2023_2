import { Module } from '@nestjs/common';
import { InterpretesService } from './interpretes.service';
import { InterpretesController } from './interpretes.controller';

@Module({
  controllers: [InterpretesController],
  providers: [InterpretesService],
})
export class InterpretesModule {}
