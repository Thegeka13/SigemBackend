import { Controller, Get, HttpCode, HttpStatus, Post, Body, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { InscritoService } from './inscrito.service';
import { CreateInscritoDTO } from 'src/dtos/createInscritoDTO';
import { UpdateInscritoDTO } from 'src/dtos/updateInscritoDTO';

@Controller('inscrito')
export class InscritoController {
    constructor(private readonly inscritoService: InscritoService) { }

    @Get()
    async findAll() {
        return await this.inscritoService.findAll();
    }

    @Get(':idCurso')
    async findOne(@Param('idCurso') idCurso: number) {
        return await this.inscritoService.findOne(idCurso);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createInscritoDTO: CreateInscritoDTO) {
        return this.inscritoService.created(createInscritoDTO);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateInscritoDTO: UpdateInscritoDTO) {
        return this.inscritoService.update(id, updateInscritoDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.inscritoService.delete(id);
    }
}