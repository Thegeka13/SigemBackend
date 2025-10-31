import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCursoController } from './tipo-curso.controller';
import { TipoCursoService } from './tipo-curso.service';
import { TipoCurso } from 'src/entities/tipoCurso';

@Module({
  imports: [TypeOrmModule.forFeature([TipoCurso])],
  controllers: [TipoCursoController],
  providers: [TipoCursoService],
  exports: [TipoCursoService],
})
export class TipoCursoModule {}
