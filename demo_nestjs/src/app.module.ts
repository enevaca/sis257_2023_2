import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterpretesModule } from './interpretes/interpretes.module';
import { GenerosModule } from './generos/generos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interprete } from './interpretes/entities/interprete.entity';
import { Genero } from './generos/entities/genero.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'usrsis257',
      password: 'Sis257...',
      database: 'db_sis257',
      entities: [Interprete, Genero],
      synchronize: true,
      autoLoadEntities: true,
    }),
    InterpretesModule,
    GenerosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
