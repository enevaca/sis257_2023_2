import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerosModule } from './generos/generos.module';
import { InterpretesModule } from './interpretes/interpretes.module';
import { ConfigModule } from '@nestjs/config';
import { AlbumesModule } from './albumes/albumes.module';
import { CancionesModule } from './canciones/canciones.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '**/*.entity.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    InterpretesModule,
    GenerosModule,
    AlbumesModule,
    CancionesModule,
    UsuariosModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
