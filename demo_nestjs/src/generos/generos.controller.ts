import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Controller('generos')
export class GenerosController {
  constructor(private readonly generosService: GenerosService) {}

  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generosService.create(createGeneroDto);
  }

  @Get()
  findAll() {
    return this.generosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto) {
    return this.generosService.update(+id, updateGeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generosService.remove(+id);
  }
}
