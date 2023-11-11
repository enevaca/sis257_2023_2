import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const existeUsuario = await this.usuarioRepository.findOneBy({
      usuario: createUsuarioDto.usuario,
    });

    if (existeUsuario) {
      throw new ConflictException('El usuario ya existe');
    }

    const usuario = new Usuario();
    usuario.usuario = createUsuarioDto.usuario.trim();
    usuario.clave = process.env.DEFAULT_PASSWORD;
    usuario.email = createUsuarioDto.email.trim();
    usuario.rol = createUsuarioDto.rol.trim();
    usuario.premium = createUsuarioDto.premium;

    const usuarioBd = await this.usuarioRepository.save(usuario);
    delete usuario.clave;
    return usuarioBd;
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`No existe el usuario ${id}`);
    }
    return usuario;
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`No existe el usuario ${id}`);
    }
    const usuarioUpdate = Object.assign(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(usuarioUpdate);
  }

  async remove(id: number) {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`No existe el usuario ${id}`);
    }
    return this.usuarioRepository.delete(id);
  }

  async validate(usuario: string, clave: string): Promise<Usuario> {
    const usuarioOk = await this.usuarioRepository.findOne({
      where: { usuario },
      select: ['id', 'usuario', 'clave', 'email', 'rol', 'premium'],
    });

    if (!usuarioOk) throw new NotFoundException('Usuario inexistente');

    if (!(await usuarioOk?.validatePassword(clave))) {
      throw new UnauthorizedException('Clave incorrecta');
    }

    delete usuarioOk.clave;
    return usuarioOk;
  }
}
