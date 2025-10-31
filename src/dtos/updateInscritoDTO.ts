import { PartialType } from '@nestjs/mapped-types';
import { CreateInscritoDTO } from './createInscritoDTO';

export class UpdateInscritoDTO extends PartialType(CreateInscritoDTO) { }