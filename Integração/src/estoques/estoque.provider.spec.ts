import { Test, TestingModule } from '@nestjs/testing';
import { EstoqueProvider } from './estoque.provider';

describe('EstoqueProvider', () => {
  let provider: EstoqueProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstoqueProvider],
    }).compile();

    provider = module.get<EstoqueProvider>(EstoqueProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
