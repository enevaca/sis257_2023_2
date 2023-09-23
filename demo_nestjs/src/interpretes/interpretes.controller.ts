import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InterpretesService } from './interpretes.service';
import { CreateInterpreteDto } from './dto/create-interprete.dto';
import { UpdateInterpreteDto } from './dto/update-interprete.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Intérpretes')
@Controller('interpretes')
export class InterpretesController {
  constructor(private readonly interpretesService: InterpretesService) {}

  @Post()
  create(@Body() createInterpreteDto: CreateInterpreteDto) {
    return this.interpretesService.create(createInterpreteDto);
  }

  @Get()
  findAll() {
    return this.interpretesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interpretesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInterpreteDto: UpdateInterpreteDto) {
    return this.interpretesService.update(+id, updateInterpreteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interpretesService.remove(+id);
  }
}
