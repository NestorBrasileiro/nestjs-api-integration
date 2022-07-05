import { Categoria } from './model/categoria.entity';

export const categoriasProviders = [
  {
    provide: 'REPOSITORIO_CATEGORIA',
    useValue: Categoria,
  },
];
