import {
  BadRequestException,
  ConflictException,
  HttpException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import sequelize from 'sequelize';
import { Estoque } from '../estoques/entities/estoque.entity';
import { EstoquesService } from '../estoques/estoques.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('REPOSITORIO_PRODUTO')
    private readonly produtoModel: typeof Produto,
    private readonly estoqueService: EstoquesService,
  ) {}

  private logger = new Logger('Produtos Service');

  async create(createProdutoDto: CreateProdutoDto) {
    try {
      const produto = await this.produtoModel.findOne({
        where: {
          codigo: createProdutoDto.codigo,
        },
      });

      if (!produto) {
        const novoProduto = await this.produtoModel.create<Produto>(
          createProdutoDto,
        );

        await this.estoqueService.create({
          idProduto: novoProduto.id,
          quantidade: 0,
          reserva: 0,
          status: 1,
        });

        return novoProduto;
      }

      throw new ConflictException(
        'O produto com este código já está cadastrado',
      );
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async findAll(filter: Record<string, string>) {
    try {
      return await this.produtoModel.findAll<Produto>({
        where: filter,
      });
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async findOne(id: string) {
    try {
      const produto = await this.produtoModel.findByPk<Produto>(id);

      if (!produto) throw new NotFoundException('Produto não encontrado');

      return produto;
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async update(id: string, updateProdutoDto: UpdateProdutoDto) {
    try {
      const produto = await this.produtoModel.findOne<Produto>({
        where: {
          id: id,
        },
      });

      if (!produto) throw new NotFoundException('Produto não encontrado');

      return await this.produtoModel.update<Produto>(updateProdutoDto, {
        where: { id: produto.id },
      });
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async remove(id: string) {
    try {
      const produto = await this.produtoModel.findOne<Produto>({
        where: {
          id: id,
        },
      });

      if (!produto) throw new NotFoundException('Produto não encontrado');

      await this.produtoModel.destroy<Produto>({
        where: {
          id: produto.id,
        },
      });

      await this.estoqueService.remove(produto.id);

      return;
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  private errorTrigger = (error: Error | sequelize.Error) => {
    if (error instanceof sequelize.Error) {
      throw new BadRequestException(error.message);
    }
    if (error instanceof HttpException) {
      throw new HttpException(error.getResponse(), error.getStatus());
    }
    this.logger.error(error.message);
    throw new InternalServerErrorException();
  };
}
