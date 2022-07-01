import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriasService {
  create(body: Record<string, any>) {
    return 'retornar a categoria que foi criada';
  }

  findAll(filter: Record<string, any>) {
    return 'retornar todos de acordo com o filtro';
  }

  findOne(idCategoria: string) {
    return 'retornar a categoria referida ao Id';
  }

  update(idCategoria: string, body: Record<string, any>) {
    return 'apenas fazer a atualização e retornar em caso de erro';
  }

  remove(idCategoria: string) {
    return 'remover a categoria e fazer atualizar os que fazem referência à ela';
  }
}
