import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { InterpretesService } from './interpretes.service';
import { CreateInterpreteDto } from './dto/create-interprete.dto';
import { UpdateInterpreteDto } from './dto/update-interprete.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Intérpretes')
@Controller('interpretes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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
