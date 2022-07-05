import { Categoria } from './model/categoria.entity';

export const categoriasProvider = [
  {
    provide: 'REPOSITORIO_CATEGORIA',
    useValue: Categoria,
  },
];
