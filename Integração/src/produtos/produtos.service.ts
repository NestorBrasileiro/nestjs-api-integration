import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('REPOSITORIO_PRODUTO')
    private readonly produtoModel: typeof Produto,
    private readonly httpService: HttpService,
  ) {}

  private logger = new Logger('Integração - Produto');

  @Cron('* */4 * * * *')
  async getProdutoAndSave() {
    try {
      const { data } = await this.httpService.axiosRef.get('/produtos');
      this.logger.debug(`Quantidade de produtos atualmente ${data.length} `);

      return await this.produtoModel.bulkCreate<Produto>(data, {
        fields: [
          'idCategoria',
          'codigo',
          'nome',
          'descricao',
          'valor',
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
