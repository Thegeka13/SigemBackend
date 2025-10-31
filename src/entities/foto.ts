import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Publicacion } from './publicacion';

@Entity('Foto')
export class Foto {
    @PrimaryGeneratedColumn()
    idFoto: number;

    @Column({ length: 255 })
    descripcion: string;

    @Column({ length: 255 })
    link: string;

    @ManyToOne(() => Publicacion, pub => pub.fotos)
    @JoinColumn({ name: 'idPublicacion' })
    publicacion: Publicacion;
}
