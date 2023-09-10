import { Test, TestingModule } from '@nestjs/testing';
import { GenerosController } from './generos.controller';
import { GenerosService } from './generos.service';

describe('GenerosController', () => {
  let controller: GenerosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerosController],
      providers: [GenerosService],
    }).compile();

    controller = module.get<GenerosController>(GenerosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
