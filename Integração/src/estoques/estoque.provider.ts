import { Estoque } from './entities/estoque.entity';

export const estoqueProvider = [
  {
    provide: 'REPOSITORIO_ESTOQUE',
    useValue: Estoque,
  },
];
