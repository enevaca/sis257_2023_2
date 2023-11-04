import { Cancion } from "src/canciones/entities/cancion.entity";
import { Interprete } from "src/interpretes/entities/interprete.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('albumes')
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ name: 'fecha_lanzamiento', type: 'date' })
  fechaLanzamiento: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => Interprete, (interprete) => interprete.albumes)
  @JoinColumn({ name: 'id_interprete', referencedColumnName: 'id' })
  interprete: Interprete;

  @OneToMany(() => Cancion, (cancion) => cancion.album)
  canciones: Cancion[];
}
