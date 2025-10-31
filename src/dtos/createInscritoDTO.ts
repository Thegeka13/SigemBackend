import { IsNull } from "typeorm";

export class CreateInscritoDTO {
    id: number;
    idUsuario: number;
    idCurso: number;
}