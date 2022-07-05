import { Test, TestingModule } from '@nestjs/testing';
import { EstoquesProvider } from './estoques.provider';

describe('EstoquesProvider', () => {
  let provider: EstoquesProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstoquesProvider],
    }).compile();

    provider = module.get<EstoquesProvider>(EstoquesProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
