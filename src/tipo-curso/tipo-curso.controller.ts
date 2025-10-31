import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TipoCursoService } from './tipo-curso.service';
import { CreateTipoCursoDTO } from 'src/dtos/createTipoCursoDTO';
import { UpdateTipoCursoDTO } from 'src/dtos/updateTipoCursoDTO';

@Controller('tipo-curso')
export class TipoCursoController {
    constructor(private readonly tipoCursoService: TipoCursoService) { }

    @Get()
    async findAll() {
        return await this.tipoCursoService.findAll();
    }

    @Get(':idTipoCurso')
    async findOne(idTipoCurso: number) {
        return await this.tipoCursoService.findOne(idTipoCurso);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() CreateTipoCursoDTO: CreateTipoCursoDTO) {
        return this.tipoCursoService.created(CreateTipoCursoDTO);
    }

    @Patch(':idTipoCurso')
    update(@Param('idTipoCurso', ParseIntPipe) idTipoCurso: number, @Body() UpdateTipoCursoDTO: UpdateTipoCursoDTO) {
        return this.tipoCursoService.update(idTipoCurso, UpdateTipoCursoDTO);
    }

    @Delete(':idTipoCurso')
    delete(@Param('idTipoCurso', ParseIntPipe) idTipoCurso: number) {
        return this.tipoCursoService.delete(idTipoCurso);
    }
}
