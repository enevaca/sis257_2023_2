import { Test, TestingModule } from '@nestjs/testing';
import { AlbumesService } from './albumes.service';

describe('AlbumesService', () => {
  let service: AlbumesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumesService],
    }).compile();

    service = module.get<AlbumesService>(AlbumesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
