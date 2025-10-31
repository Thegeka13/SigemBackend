import { Test, TestingModule } from '@nestjs/testing';
import { TipoCursoController } from './tipo-curso.controller';

describe('TipoCursoController', () => {
  let controller: TipoCursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoCursoController],
    }).compile();

    controller = module.get<TipoCursoController>(TipoCursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
