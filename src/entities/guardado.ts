import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Publicacion } from './publicacion';

@Entity('Guardado')
export class Guardado {
    @PrimaryGeneratedColumn()
    idGuardado: number;

    @Column({ type: 'bit' })
    guardado: boolean;

    @ManyToOne(() => Publicacion, pub => pub.guardados)
    @JoinColumn({ name: 'idPublicacion' })
    publicacion: Publicacion;
}
