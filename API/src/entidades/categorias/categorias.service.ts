import {
  BadRequestException,
  ConflictException,
  HttpException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Categoria } from './model/categoria.entity';
import { Logger } from '@nestjs/common';
import sequelize from 'sequelize';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(
    @Inject('REPOSITORIO_CATEGORIA')
    private readonly categoriaModel: typeof Categoria,
  ) {}

  private logger = new Logger('CategoriaService');

  async create(body: CreateCategoriaDto) {
    try {
      const codigo: string = this.slugCodigoFormatter(body.codigo);

      body.codigo = codigo;

      const categoria = await this.categoriaModel.findOne({
        where: { codigo: codigo },
      });

      if (!categoria) {
        return await this.categoriaModel.create<Categoria>(body);
      }

      throw new ConflictException('Categoria já existente');
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async findAll(filter: Record<string, any>) {
    try {
      return await this.categoriaModel.findAll<Categoria>(filter);
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async findOne(idCategoria: string) {
    try {
      const categoria = await this.categoriaModel.findOne<Categoria>({
        where: { id: idCategoria },
      });

      if (!categoria) throw new NotFoundException('Categoria não encontrada');

      return categoria;
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async update(idCategoria: string, body: UpdateCategoriaDto) {
    try {
      const categoria: Categoria = await this.categoriaModel.findOne<Categoria>(
        {
          where: {
            id: this.slugCodigoFormatter(idCategoria),
          },
        },
      );

      if (!categoria) throw new NotFoundException('Categoria não encontrada');

      body.codigo
        ? (body.codigo = this.slugCodigoFormatter(body.codigo))
        : false;

      return await this.categoriaModel.update<Categoria>(body, {
        where: {
          id: categoria.id,
        },
      });
    } catch (error) {
      this.errorTrigger(error);
    }
  }

  async remove(idCategoria: string) {
    try {
      const categoria: Categoria = await this.categoriaModel.findOne<Categoria>(
        {
          where: {
            id: idCategoria,
          },
        },
      );

      if (!categoria) throw new NotFoundException('Categoria não encontrada');

      return await this.categoriaModel.destroy({
        where: {
          id: categoria.id,
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

  private slugCodigoFormatter = (value: string) => {
    return value.trim().replace(/[\s-!$%@#^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '-');
  };
}
