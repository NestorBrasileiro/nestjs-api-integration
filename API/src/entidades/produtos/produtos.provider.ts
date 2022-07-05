import { Produto } from './entities/produto.entity';

export const produtosProvider = [
  {
    provide: 'REPOSITORIO_PRODUTO',
    useValue: Produto,
  },
];
