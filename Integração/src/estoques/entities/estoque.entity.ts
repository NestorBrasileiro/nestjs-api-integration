import {
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Produto } from 'src/produtos/entities/produto.entity';

@Table
export class Estoque extends Model<Estoque> {
  @ForeignKey(() => Produto)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idProduto: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantidade: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  reserva: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status: number;
}
