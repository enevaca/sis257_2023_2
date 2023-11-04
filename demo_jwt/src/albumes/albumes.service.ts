import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';
import { Interprete } from 'src/interpretes/entities/interprete.entity';

@Injectable()
export class AlbumesService {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
  ) {}

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const existeAlbum = await this.albumRepository.findOneBy({
      nombre: createAlbumDto.nombre,
      interprete: { id: createAlbumDto.idInterprete },
    });

    if (existeAlbum) {
      throw new ConflictException('El album ya existe');
    }

    return this.albumRepository.save({
      nombre: createAlbumDto.nombre.trim(),
      fechaLanzamiento: createAlbumDto.fechaLanzamiento,
      interprete: { id: createAlbumDto.idInterprete },
    });
  }

  async findAll(): Promise<Album[]> {
    return this.albumRepository.find({ relations: ['interprete'] });
  }

  async findOne(id: number): Promise<Album> {
    const album = await this.albumRepository.findOne({
      where: { id },
      relations: ['interprete'],
    });
    if (!album) {
      throw new NotFoundException(`No existe el album ${id}`);
    }
    return album;
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<Album> {
    const album = await this.albumRepository.findOneBy({ id });
    if (!album) {
      throw new NotFoundException(`No existe el album ${id}`);
    }
    const albumUpdate = Object.assign(album, updateAlbumDto);
    albumUpdate.interprete = { id: updateAlbumDto.idInterprete } as Interprete;
    return this.albumRepository.save(albumUpdate);
  }

  async remove(id: number) {
    const album = await this.albumRepository.findOneBy({ id });
    if (!album) {
      throw new NotFoundException(`No existe el album ${id}`);
    }
    return this.albumRepository.delete(id);
  }
}
