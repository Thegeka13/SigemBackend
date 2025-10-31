import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Requisitos } from './requisitos';

@Entity('Apoyo')
export class Apoyo {
    @PrimaryGeneratedColumn()
    idApoyo: number;

    @Column({ length: 150 })
    nombre: string;

    @Column({ type: 'nvarchar', length: 'MAX' })
    descripcion: string;

    @Column({ type: 'nvarchar', length: 'MAX' })
    requisitos: string;

    @OneToMany(() => Requisitos, req => req.apoyo)
    usuarios: Requisitos[];
}
