import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { TipoEvento } from './tipo-evento';
import { Confirmacion } from './confirmacion';

@Entity('Evento')
export class Evento {
  @PrimaryGeneratedColumn()
  idEvento: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ length: 255 })
  bannerLink: string;

  @Column({ type: 'datetime' })
  fechaInicio: Date;

  @Column({ type: 'datetime' })
  fechaTermino: Date;

  @ManyToOne(() => TipoEvento, tipo => tipo.eventos)
  @JoinColumn({ name: 'idTipoEvento' })
  tipoEvento: TipoEvento;

  @OneToMany(() => Confirmacion, conf => conf.evento)
  confirmaciones: Confirmacion[];
}
