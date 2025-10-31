import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Curso } from './curso';

@Entity('TipoCurso')
export class TipoCurso {
    @PrimaryGeneratedColumn()
    idTipoCurso: number;

    @Column({ length: 100 })
    nombre: string;

    @OneToMany(() => Curso, (curso) => curso.tipoCurso)
    cursos: Curso[];
}
