import { Test, TestingModule } from '@nestjs/testing';
import { InterpretesService } from './interpretes.service';

describe('InterpretesService', () => {
  let service: InterpretesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterpretesService],
    }).compile();

    service = module.get<InterpretesService>(InterpretesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
