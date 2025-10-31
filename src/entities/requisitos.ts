import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Usuario } from './usuario';
import { Apoyo } from './apoyo';

@Entity('Requisitos')
export class Requisitos {
    @PrimaryColumn()
    idUsuario: number;

    @PrimaryColumn()
    idApoyo: number;

    @ManyToOne(() => Usuario, usuario => usuario.requisitos)
    @JoinColumn({ name: 'idUsuario' })
    usuario: Usuario;

    @ManyToOne(() => Apoyo, apoyo => apoyo.usuarios)
    @JoinColumn({ name: 'idApoyo' })
    apoyo: Apoyo;
}
