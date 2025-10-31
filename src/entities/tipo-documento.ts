import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DocumentoEmpresarial } from './documento-empresarial';

@Entity('TipoDocumento')
export class TipoDocumento {
    @PrimaryGeneratedColumn()
    idTipoDocumento: number;

    @Column({ length: 100 })
    nombre: string;

    @OneToMany(() => DocumentoEmpresarial, doc => doc.tipoDocumento)
    documentos: DocumentoEmpresarial[];
}
