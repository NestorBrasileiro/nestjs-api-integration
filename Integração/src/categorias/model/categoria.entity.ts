import { Table, Column, Model, DataType } from 'sequelize-typescript';

export enum CATEGORIA_STATUS {
  ATIVO = 1,
  INATIVO = 0,
}
@Table
export class Categoria extends Model<Categoria> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  codigo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 40],
        msg: 'O título deve ser do tipo string e conter entre 3 e 40 caracteres ',
      },
    },
  })
  titulo: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      isIn: {
        args: [[0, 1]],
        msg: 'O numero deve ser 0(Inativo) ou 1(Ativo)',
      },
    },
  })
  status: number;
}
