import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateInterpreteDto } from './dto/create-interprete.dto';
import { UpdateInterpreteDto } from './dto/update-interprete.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Interprete } from './entities/interprete.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InterpretesService {
  constructor(
    @InjectRepository(Interprete)
    private interpreteRepository: Repository<Interprete>,
  ) {}

  async create(createInterpreteDto: CreateInterpreteDto): Promise<Interprete> {
    const existeInterprete = await this.interpreteRepository.findOneBy({
      nombre: createInterpreteDto.nombre,
      nacionalidad: createInterpreteDto.nacionalidad,
    });

    if (existeInterprete) {
      throw new ConflictException('El intérprete ya existe');
    }

    return this.interpreteRepository.save({
      nombre: createInterpreteDto.nombre.trim(),
      nacionalidad: createInterpreteDto.nacionalidad.trim(),
    });
  }

  async findAll(): Promise<Interprete[]> {
    return this.interpreteRepository.find();
  }

  async findOne(id: number): Promise<Interprete> {
    const interprete = await this.interpreteRepository.findOneBy({ id });
    if (!interprete) {
      throw new NotFoundException(`No existe el intérprete ${id}`);
    }
    return interprete;
  }

  async update(id: number, updateInterpreteDto: UpdateInterpreteDto): Promise<Interprete> {
    const interprete = await this.interpreteRepository.findOneBy({ id });
    if (!interprete) {
      throw new NotFoundException(`No existe el intérprete ${id}`);
    }
    const interpreteUpdate = Object.assign(interprete, updateInterpreteDto);
    return this.interpreteRepository.save(interpreteUpdate);
  }

  async remove(id: number) {
    const interprete = await this.interpreteRepository.findOneBy({ id });
    if (!interprete) {
      throw new NotFoundException(`No existe el intérprete ${id}`);
    }
    return this.interpreteRepository.delete(id);
  }
}
