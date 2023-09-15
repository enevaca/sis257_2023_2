import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('interpretes')
export class Interprete {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nacionalidad: string;
}
