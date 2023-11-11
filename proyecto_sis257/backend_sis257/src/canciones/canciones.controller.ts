import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('canciones')
@Controller('canciones')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CancionesController {
  constructor(private readonly cancionesService: CancionesService) {}

  @Post()
  create(@Body() createCancioneDto: CreateCancionDto) {
    return this.cancionesService.create(createCancioneDto);
  }

  @Get()
  findAll() {
    return this.cancionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCancioneDto: UpdateCancionDto) {
    return this.cancionesService.update(+id, updateCancioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionesService.remove(+id);
  }
}
