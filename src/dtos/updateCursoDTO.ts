import { PartialType } from '@nestjs/mapped-types';
import { CreateCursoDTO } from './createCursoDTO';

export class UpdateCursoDTO extends PartialType(CreateCursoDTO) {}