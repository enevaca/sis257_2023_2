import { Test, TestingModule } from '@nestjs/testing';
import { GenerosService } from './generos.service';

describe('GenerosService', () => {
  let service: GenerosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerosService],
    }).compile();

    service = module.get<GenerosService>(GenerosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
