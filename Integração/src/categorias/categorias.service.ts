import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { timeout } from 'cron';
import { UpdatedAt } from 'sequelize-typescript';
import { Categoria } from './model/categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    private readonly httpService: HttpService,
    @Inject('REPOSITORIO_CATEGORIA')
    private readonly categoriaModel: typeof Categoria,
  ) {}

  private logger = new Logger('Integração - Categorias');

  @Cron('0 * * * * *')
  async getCategorias() {
    try {
      const categoria = await this.httpService.axiosRef.get('/categorias');
      this.logger.debug(
        `Quantidade de categorias atuais ${categoria.data.length} `,
      );

      const localCategorias = await this.categoriaModel.bulkCreate(
        categoria.data,
        {
          fields: ['codigo', 'titulo', 'status', 'createdAt', 'updatedAt'],
          ignoreDuplicates: true,
        },
      );

      return localCategorias;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
