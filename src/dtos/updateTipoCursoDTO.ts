import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoCursoDTO } from './createTipoCursoDTO';

export class UpdateTipoCursoDTO extends PartialType(CreateTipoCursoDTO) {}