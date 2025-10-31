import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { TipoCurso } from './tipoCurso';
import { Inscrito } from './inscrito';


@Entity('Curso')
export class Curso {
    @PrimaryGeneratedColumn()
    idCurso: number;

    @Column({ length: 150 })
    nombre: string;

    @Column({ length: 150 })
    institucion: string;

    @Column({ type: 'datetime' })
    fechaInicio: Date;

    @Column({ type: 'datetime' })
    fechaFin: Date;

    @Column()
    alumnosInscritos: number;

    @Column({ length: 255 })
    enlace: string;

    @ManyToOne(() => TipoCurso, (tipoCurso) => tipoCurso.cursos)
    @JoinColumn({ name: 'idTipoCurso' })
    tipoCurso: TipoCurso;

    @OneToMany(() => Inscrito, (inscrito) => inscrito.curso)
    inscritos: Inscrito[];
}
