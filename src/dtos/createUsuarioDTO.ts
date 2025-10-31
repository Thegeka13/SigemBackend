import { IsNull } from "typeorm";

export class CreateUsuarioDTO {
    id: number;           // opcional al crear (IDENTITY en SQL)
    usuario: string;
    contrasenia: string;
    idEmpleado: number;           // FK hacia Empleado
    idRol: number;                // FK hacia Rol
}
