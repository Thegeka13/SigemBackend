import { IsNull } from "typeorm";

export class CreateCursoDTO {
    id: number;
    nombre: string;
    institucion: string;
    fechaInicio: Date;
    fechaFin: Date;
    alumnosInscritos: number;
    enlace: string;
}