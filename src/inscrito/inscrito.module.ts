import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InscritoController } from './inscrito.controller';
import { InscritoService } from './inscrito.service';
import { Inscrito } from './../entities/inscrito';

@Module({
  imports: [TypeOrmModule.forFeature([Inscrito])],
  controllers: [InscritoController],
  providers: [InscritoService],
  exports: [InscritoService],
})
export class InscritoModule { }
