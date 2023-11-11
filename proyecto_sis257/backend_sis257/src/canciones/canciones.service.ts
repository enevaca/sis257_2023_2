import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cancion } from './entities/cancion.entity';
import { Repository } from 'typeorm';
import { Album } from 'src/albumes/entities/album.entity';
import { Genero } from 'src/generos/entities/genero.entity';

@Injectable()
export class CancionesService {
  constructor(
    @InjectRepository(Cancion)
    private cancionRepository: Repository<Cancion>,
  ) {}

  async create(createCancioneDto: CreateCancionDto): Promise<Cancion> {
    const existeCancion = await this.cancionRepository.findOneBy({
      nombre: createCancioneDto.nombre,
      album: { id: createCancioneDto.idAlbum },
    });

    if (existeCancion) {
      throw new ConflictException('La canción ya existe');
    }

    return this.cancionRepository.save({
      nombre: createCancioneDto.nombre.trim(),
      duracion: createCancioneDto.duracion,
      tags: createCancioneDto.tags,
      url: createCancioneDto.url,
      album: { id: createCancioneDto.idAlbum },
      genero: { id: createCancioneDto.idGenero },
    });
  }

  async findAll(): Promise<Cancion[]> {
    return this.cancionRepository.find({ relations: ['album', 'genero'] });
  }

  async findOne(id: number): Promise<Cancion> {
    const cancion = await this.cancionRepository.findOne({
      where: { id },
      relations: ['album', 'genero'],
    });
    if (!cancion) {
      throw new NotFoundException(`No existe la canción ${id}`);
    }
    return cancion;
  }

  async update(id: number, updateCancioneDto: UpdateCancionDto): Promise<Cancion> {
    const cancion = await this.cancionRepository.findOneBy({ id });
    if (!cancion) {
      throw new NotFoundException(`No existe la canción ${id}`);
    }
    const cancionUpdate = Object.assign(cancion, updateCancioneDto);
    cancionUpdate.album = { id: updateCancioneDto.idAlbum } as Album;
    cancionUpdate.genero = { id: updateCancioneDto.idGenero } as Genero;
    return this.cancionRepository.save(cancionUpdate);
  }

  async remove(id: number) {
    const cancion = await this.cancionRepository.findOneBy({ id });
    if (!cancion) {
      throw new NotFoundException(`No existe la canción ${id}`);
    }
    return this.cancionRepository.delete(id);
  }
}
