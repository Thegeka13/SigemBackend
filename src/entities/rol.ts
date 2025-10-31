import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuario } from './usuario';

@Entity('Rol')
export class Rol {
    @PrimaryGeneratedColumn()
    idRol: number;

    @Column({ length: 100 })
    nombre: string;

    @OneToMany(() => Usuario, usuario => usuario.rol)
    usuarios: Usuario[];
}
