import { Test, TestingModule } from '@nestjs/testing';
import { AlbumesController } from './albumes.controller';
import { AlbumesService } from './albumes.service';

describe('AlbumesController', () => {
  let controller: AlbumesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumesController],
      providers: [AlbumesService],
    }).compile();

    controller = module.get<AlbumesController>(AlbumesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
