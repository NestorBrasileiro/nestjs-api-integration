import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasProvider } from './categorias.provider';

describe('CategoriasProvider', () => {
  let provider: CategoriasProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasProvider],
    }).compile();

    provider = module.get<CategoriasProvider>(CategoriasProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
