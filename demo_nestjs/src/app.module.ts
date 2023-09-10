import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterpretesModule } from './interpretes/interpretes.module';
import { GenerosModule } from './generos/generos.module';

@Module({
  imports: [InterpretesModule, GenerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
