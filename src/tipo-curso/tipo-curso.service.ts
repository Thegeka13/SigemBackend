import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTipoCursoDTO } from 'src/dtos/updateTipoCursoDTO';
import { CreateTipoCursoDTO } from 'src/dtos/createTipoCursoDTO';
import { TipoCurso } from 'src/entities/tipoCurso';
import { Repository } from 'typeorm';

@Injectable()
export class TipoCursoService {
    constructor(@InjectRepository(TipoCurso) private readonly tipoCursoRepository: Repository<TipoCurso>) { }

    async findAll() {
        return await this.tipoCursoRepository.find();
    }

    async findOne(idTipoCurso: number) {
        return await this.tipoCursoRepository.findOne({ where: { idTipoCurso} });
    }

    async created(CreateTipoCursoDTO: CreateTipoCursoDTO) {
        return await this.tipoCursoRepository.save(CreateTipoCursoDTO);
    }

    async update(idTipoCurso: number, tipoCurso: UpdateTipoCursoDTO) {
        return await this.tipoCursoRepository.update(idTipoCurso, tipoCurso);
    }

    async delete(idTipoCurso: number) {
        return await this.tipoCursoRepository.delete(idTipoCurso);
    }
}
