import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('generos')
export class Genero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  descripcion: string;
}
