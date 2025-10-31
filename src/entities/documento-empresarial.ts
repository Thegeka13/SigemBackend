import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario';
import { TipoDocumento } from './tipo-documento';

@Entity('DocumentoEmpresarial')
export class DocumentoEmpresarial {
    @PrimaryGeneratedColumn()
    idDocumento: number;

    @Column({ length: 150 })
    nombre: string;

    @Column({ length: 255 })
    link: string;

    @Column({ length: 50 })
    estatus: string;

    @ManyToOne(() => Usuario, usuario => usuario.documentos)
    @JoinColumn({ name: 'idUsuario' })
    usuario: Usuario;

    @ManyToOne(() => TipoDocumento, tipo => tipo.documentos)
    @JoinColumn({ name: 'idTipoDocumento' })
    tipoDocumento: TipoDocumento;
}
