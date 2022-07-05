import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Categoria } from 'src/entidades/categorias/model/categoria.entity';

@Table
export class Produto extends Model<Produto> {
  @ForeignKey(() => Categoria)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idCategoria: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 30],
        msg: 'O código deve ser do tipo string e conter entre 1 e 30 caracteres ',
      },
    },
  })
  codigo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 30],
        msg: 'O nome deve ser do tipo string e conter entre 1 e 30 caracteres ',
      },
    },
  })
  nome: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 30],
        msg: 'A descrição deve ser do tipo string e conter entre 4 e 30 caracteres ',
      },
    },
  })
  descricao: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  valor: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[0, 1]],
    },
  })
  status: number;
}
