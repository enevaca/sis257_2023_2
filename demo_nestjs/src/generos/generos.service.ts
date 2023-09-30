import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenerosService {
  constructor(
    @InjectRepository(Genero)
    private generoRepository: Repository<Genero>,
  ) {}

  async create(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    const existeGenero = await this.generoRepository.findOneBy({
      descripcion: createGeneroDto.descripcion
    });

    if (existeGenero) {
      throw new ConflictException('El género ya existe');
    }

    return this.generoRepository.save({
      descripcion: createGeneroDto.descripcion.trim(),
    });
  }

  async findAll(): Promise<Genero[]> {
    return this.generoRepository.find();
  }

  async findOne(id: number): Promise<Genero> {
    const genero = await this.generoRepository.findOneBy({ id });
    if (!genero) {
      throw new NotFoundException(`No existe el género ${id}`);
    }
    return genero;
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto): Promise<Genero> {
    const genero = await this.generoRepository.findOneBy({ id });
    if (!genero) {
      throw new NotFoundException(`No existe el género ${id}`);
    }
    const generoUpdate = Object.assign(genero, updateGeneroDto);
    return this.generoRepository.save(generoUpdate);
  }

  async remove(id: number) {
    const interprete = await this.generoRepository.findOneBy({ id });
    if (!interprete) {
      throw new NotFoundException(`No existe el género ${id}`);
    }
    return this.generoRepository.delete(id);
  }
}
