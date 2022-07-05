import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Estoque } from './entities/estoque.entity';

@Injectable()
export class EstoquesService {
  constructor(
    @Inject('REPOSITORIO_ESTOQUE')
    private readonly estoqueModel: typeof Estoque,
    private readonly httpService: HttpService,
  ) {}

  private logger = new Logger('Integracao - Estoque');

  async getEstoques(idProduto: string) {
    try {
      const { data } = await this.httpService.axiosRef.get(
        `/produtos/${idProduto}/estoque`,
      );
      this.logger.log(`Buscando estoque do produto ${idProduto}`);
      return await this.estoqueModel.bulkCreate<Estoque>(data, {
        fields: [
          'idProduto',
          'quantidade',
          'reserva',
          'status',
          'createdAt',
          'updatedAt',
        ],
        ignoreDuplicates: true,
      });
    } catch (error) {
      this.logger.error(error);
      throw new Error(error.message);
    }
  }
}
