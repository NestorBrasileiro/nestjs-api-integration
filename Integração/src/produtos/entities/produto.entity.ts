import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Categoria } from 'src/categorias/model/categoria.entity';

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
  })
  codigo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
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
