import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosProvider } from './produtos.provider';

describe('ProdutosProvider', () => {
  let provider: ProdutosProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosProvider],
    }).compile();

    provider = module.get<ProdutosProvider>(ProdutosProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
