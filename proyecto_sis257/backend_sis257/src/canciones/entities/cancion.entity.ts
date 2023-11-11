import { Album } from "src/albumes/entities/album.entity";
import { Genero } from "src/generos/entities/genero.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('canciones')
export class Cancion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  nombre: string;

  @Column({ length: 8 })
  duracion: string;

  @Column({ length: 30 })
  tags: string;

  @Column({ length: 250 })
  url: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => Album, (album) => album.canciones)
  @JoinColumn({ name: 'id_album', referencedColumnName: 'id' })
  album: Album;

  @ManyToOne(() => Genero, (genero) => genero.canciones)
  @JoinColumn({ name: 'id_genero', referencedColumnName: 'id' })
  genero: Genero;
}
