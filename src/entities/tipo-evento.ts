import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Evento } from './evento';

@Entity('TipoEvento')
export class TipoEvento {
    @PrimaryGeneratedColumn()
    idTipoEvento: number;

    @Column({ length: 100 })
    nombre: string;

    @OneToMany(() => Evento, evento => evento.tipoEvento)
    eventos: Evento[];
}
