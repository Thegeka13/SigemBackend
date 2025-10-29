import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/usuario';
import { Repository } from 'typeorm';
import { CreateUsuarioDTO } from '../dtos/createUsuarioDTO';
import { UpdateUsuarioDTO } from 'src/dtos/updateUsuarioDTO';

@Injectable()
export class UsuarioService {
    constructor(@InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>) { }

    async crear(CreateUsuarioDTO: CreateUsuarioDTO) {
        return await this.usuarioRepository.save(CreateUsuarioDTO);
    }

    async Mostrar() {
        return await this.usuarioRepository.find();
    }

    async findOne(id: number) {
        return await this.usuarioRepository.findOne({ where: { id } });
    }

    async update(id: number, usuario: UpdateUsuarioDTO) {
        return await this.usuarioRepository.update(id, usuario);
    }

    async delete(id: number) {
        return await this.usuarioRepository.delete(id);
    }
}
