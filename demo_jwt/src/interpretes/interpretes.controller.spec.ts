import { Test, TestingModule } from '@nestjs/testing';
import { InterpretesController } from './interpretes.controller';
import { InterpretesService } from './interpretes.service';

describe('InterpretesController', () => {
  let controller: InterpretesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterpretesController],
      providers: [InterpretesService],
    }).compile();

    controller = module.get<InterpretesController>(InterpretesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
