import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from 'src/entities/curso';
import { Repository } from 'typeorm';
import { CreateCursoDTO } from '../dtos/createCursoDTO';
import { UpdateCursoDTO } from 'src/dtos/updateCursoDTO';

@Injectable()
export class CursoService {
    constructor(@InjectRepository(Curso) private readonly cursoRepository: Repository<Curso>) { }

    async created(CreateCursoDTO: CreateCursoDTO) {
        return await this.cursoRepository.save(CreateCursoDTO);
    }

    async findAll() {
        return await this.cursoRepository.find();
    }

    async findOne(idCurso: number) {
        return await this.cursoRepository.findOne({ where: { idCurso } });
    }

    async update(idCurso: number, curso: UpdateCursoDTO) {
        return await this.cursoRepository.update(idCurso, curso);
    }

    async delete(id: number) {
        return await this.cursoRepository.delete(id);
    }
}
