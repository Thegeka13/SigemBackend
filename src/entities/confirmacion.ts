import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario';
import { Evento } from './evento';

@Entity('Confirmacion')
export class Confirmacion {
    @PrimaryGeneratedColumn()
    idConfirmacion: number;

    @ManyToOne(() => Usuario, usuario => usuario.confirmaciones)
    @JoinColumn({ name: 'idUsuario' })
    usuario: Usuario;

    @ManyToOne(() => Evento, evento => evento.confirmaciones)
    @JoinColumn({ name: 'idEvento' })
    evento: Evento;

    @Column({ type: 'bit' })
    confirmado: boolean;

    @Column({ type: 'bit' })
    enterado: boolean;
}
