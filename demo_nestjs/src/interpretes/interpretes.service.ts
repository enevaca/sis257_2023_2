import { Injectable } from '@nestjs/common';
import { CreateInterpreteDto } from './dto/create-interprete.dto';
import { UpdateInterpreteDto } from './dto/update-interprete.dto';

@Injectable()
export class InterpretesService {
  create(createInterpreteDto: CreateInterpreteDto) {
    return 'This action adds a new interprete';
  }

  findAll() {
    return `This action returns all interpretes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interprete`;
  }

  update(id: number, updateInterpreteDto: UpdateInterpreteDto) {
    return `This action updates a #${id} interprete`;
  }

  remove(id: number) {
    return `This action removes a #${id} interprete`;
  }
}
