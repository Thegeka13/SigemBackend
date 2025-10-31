import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Usuario } from './usuario';

@Entity('Empleado')
export class Empleado {
    @PrimaryGeneratedColumn()
    idEmpleado: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 100 })
    apellido: string;

    @Column({ length: 200 })
    direccion: string;

    @Column({ length: 100 })
    colonia: string;

    @Column({ length: 20 })
    telefonoPersonal: string;

    @Column({ length: 150 })
    correoPersonal: string;

    @Column({ length: 10 })
    extension: string;

    @Column({ length: 150 })
    correoInstitucional: string;

    @Column({ type: 'datetime' })
    fechaIngreso: Date;

    @Column({ type: 'datetime', nullable: true })
    fechaSalida: Date;

    @Column()
    diasVacaciones: number;

    @Column()
    tiempoDisponible: number;

    @Column()
    diasSDSDisponibles: number;

    @OneToOne(() => Usuario, usuario => usuario.empleado)
    usuario: Usuario;
}
