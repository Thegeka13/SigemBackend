import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TipoCursoModule } from './tipo-curso/tipo-curso.module';
import { CursoModule } from './curso/curso.module';
import { InscritoModule } from './inscrito/inscrito.module';
import { ApoyoModule } from './apoyo/apoyo.module';
import { ConfirmacionModule } from './confirmacion/confirmacion.module';
import { DocumentoEmpresarialModule } from './documento-empresarial/documento-empresarial.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { EventoModule } from './evento/evento.module';
import { FotoModule } from './foto/foto.module';
import { GuardadoModule } from './guardado/guardado.module';
import { PublicacionModule } from './publicacion/publicacion.module';
import { RequisitosModule } from './requisitos/requisitos.module';
import { RolModule } from './rol/rol.module';
import { TipoDocumentoModule } from './tipo-documento/tipo-documento.module';
import { TipoEventoModule } from './tipo-evento/tipo-evento.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
        options: {
          encrypt: true,
          trustServerCertificate: true,
        },
      }),
    }),

    UsuarioModule,

    TipoCursoModule,

    CursoModule,

    InscritoModule,

    ApoyoModule,

    ConfirmacionModule,

    DocumentoEmpresarialModule,

    EmpleadoModule,

    EventoModule,

    FotoModule,

    GuardadoModule,

    PublicacionModule,

    RequisitosModule,

    RolModule,

    TipoDocumentoModule,

    TipoEventoModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
