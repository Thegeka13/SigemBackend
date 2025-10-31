import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inscrito } from 'src/entities/inscrito';
import { Repository } from 'typeorm';
import { UpdateInscritoDTO } from 'src/dtos/updateInscritoDTO';


@Injectable()
export class InscritoService {
    constructor(@InjectRepository(Inscrito) private readonly inscritoRepository: Repository<Inscrito>) { }
    

    async created(CreateInscritoDTO) {
        return await this.inscritoRepository.save(CreateInscritoDTO);
    }

    async findAll() {
        return await this.inscritoRepository.find();
    }

    async findOne(idCurso: number) {
        return await this.inscritoRepository.findOne({ where: { idCurso } });
    }

    async update(id: number, inscrito: UpdateInscritoDTO) {
        return await this.inscritoRepository.update(id, inscrito);
    }

    async delete(id: number) {
        return await this.inscritoRepository.delete(id);
    }
}
