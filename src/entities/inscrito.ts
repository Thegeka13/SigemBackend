import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Curso } from './curso';
import { Usuario } from './usuario';

@Entity('Inscrito')
export class Inscrito {
    @PrimaryColumn()
    idCurso: number;

    @PrimaryColumn()
    idUsuario: number;

    @ManyToOne(() => Curso, (curso) => curso.inscritos)
    @JoinColumn({ name: 'idCurso' })
    curso: Curso;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'idUsuario' })
    usuario: Usuario;
}
