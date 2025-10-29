import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDTO } from './createUsuarioDTO';

export class UpdateUsuarioDTO extends PartialType(CreateUsuarioDTO) {}