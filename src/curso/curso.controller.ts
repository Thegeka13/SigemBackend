import { Controller, Get, HttpCode, HttpStatus, Post, Body, Patch, Param, ParseIntPipe, Delete} from '@nestjs/common';
import { CursoService } from './curso.service';
import { Curso } from 'src/entities/curso';
import { UpdateCursoDTO } from 'src/dtos/updateCursoDTO';
import { CreateCursoDTO } from 'src/dtos/createCursoDTO';

@Controller('curso')
export class CursoController {
    constructor(private readonly cursoService: CursoService) { }

    @Get()
    async findAll() {
        return await this.cursoService.findAll();
    }

    @Get(':idCurso')
    async findOne(@Param('idCurso') idCurso: number) {
        return await this.cursoService.findOne(idCurso);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() CreateCursoDTO: CreateCursoDTO) {
        return this.cursoService.created(CreateCursoDTO);
    }

    @Patch(':idCurso')
    update(@Param('idCurso', ParseIntPipe) idCurso: number, @Body() curso: UpdateCursoDTO) {
        return this.cursoService.update(idCurso, curso);
    }

    @Delete(':idCurso')
    delete(@Param('idCurso') idCurso: number) {
        return this.cursoService.delete(idCurso);
    }
}
