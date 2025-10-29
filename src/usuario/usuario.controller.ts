import { Controller, Get, HttpCode, HttpStatus, Post, Body, Patch, Param, ParseIntPipe, Delete} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO } from 'src/dtos/createUsuarioDTO';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) { }

    @Get()
    async findAll() {
        return await this.usuarioService.Mostrar();
    }

    @Get(':id')
    async findOne(id: number) {
        return await this.usuarioService.findOne(id);
    } 
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createUsuarioDTO: CreateUsuarioDTO) {
        return this.usuarioService.crear(createUsuarioDTO);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateUsuarioDTO: CreateUsuarioDTO) {
        return this.usuarioService.update(id, updateUsuarioDTO);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.delete(id);
    }

}
