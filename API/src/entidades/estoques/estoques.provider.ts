import { Estoque } from './entities/estoque.entity';

export const estoquesProvider = [
  {
    provide: 'REPOSITORIO_ESTOQUE',
    useValue: Estoque,
  },
];
