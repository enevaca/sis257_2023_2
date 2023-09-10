import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Mundo!';
  }

  saludar(): string {
    return 'Hola SIS257';
  }
}
