import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from './usuario';
import { Foto } from './foto';
import { Guardado } from './guardado';

@Entity('Publicacion')
export class Publicacion {
  @PrimaryGeneratedColumn()
  idPublicacion: number;

  @Column({ length: 150 })
  producto: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'nvarchar', length: 'MAX' })
  descripcion: string;

  @Column({ type: 'bit' })
  estatus: boolean;

  @ManyToOne(() => Usuario, usuario => usuario.publicaciones)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @OneToMany(() => Foto, foto => foto.publicacion)
  fotos: Foto[];

  @OneToMany(() => Guardado, guardado => guardado.publicacion)
  guardados: Guardado[];
}
