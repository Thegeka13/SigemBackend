import { IsNull } from "typeorm";

export class CreateUsuarioDTO {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
}