import {
  BadRequestException,
  HttpException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotImplementedException,
} from '@nestjs/common';
import sequelize from 'sequelize';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { Estoque } from './entities/estoque.entity';

@Injectable()
export class EstoquesService {
  constructor(
    @Inject('REPOSITORIO_ESTOQUE')
    private readonly estoqueModel: typeof Estoque,
  ) {}

  private logger = new Logger('Estoques Service');

  async create(createEstoqueDto: CreateEstoqueDto) {
    try {
      return await this.estoqueModel.create<Estoque>(createEstoqueDto);
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async findOne(idProduto: string) {
    try {
      return await this.estoqueModel.findOne<Estoque>({
        where: {
          idProduto: idProduto,
        },
      });
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    try {
      return await this.estoqueModel.update(updateEstoqueDto, {
        where: {
          idProduto: id,
        },
      });
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async remove(idProduto: string) {
    try {
      return await this.estoqueModel.destroy({
        where: {
          idProduto: idProduto,
        },
      });
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
