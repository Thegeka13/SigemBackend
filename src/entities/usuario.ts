import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Empleado } from './empleado';
import { Rol } from './rol';
import { Confirmacion } from './confirmacion';
import { DocumentoEmpresarial } from './documento-empresarial';
import { Publicacion } from './publicacion';
import { Requisitos } from './requisitos';

@Entity('Usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    usuario: string;

    @Column({ length: 255 })
    contrasenia: string;

    @ManyToOne(() => Rol, rol => rol.usuarios)
    @JoinColumn({ name: 'idRol' })
    rol: Rol;

    @OneToOne(() => Empleado, empleado => empleado.usuario)
    @JoinColumn({ name: 'idEmpleado' })
    empleado: Empleado;

    @OneToMany(() => Confirmacion, confirmacion => confirmacion.usuario)
    confirmaciones: Confirmacion[];

    @OneToMany(() => DocumentoEmpresarial, documento => documento.usuario)
    documentos: DocumentoEmpresarial[];

    @OneToMany(() => Publicacion, publicacion => publicacion.usuario)
    publicaciones: Publicacion[];

    @OneToMany(() => Requisitos, req => req.usuario)
    requisitos: Requisitos[];
}
