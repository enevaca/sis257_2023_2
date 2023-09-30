import { Interprete } from "src/interpretes/entities/interprete.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('albumes')
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ name: 'fecha_lanzamiento', type: 'date' })
  fechaLanzamiento: Date;

  @ManyToOne(() => Interprete, (interprete) => interprete.albumes)
  @JoinColumn({ name: 'id_interprete', referencedColumnName: 'id' })
  interprete: Interprete;
}
