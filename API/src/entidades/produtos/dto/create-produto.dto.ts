import { IsString, Length, Min, Max, IsInt, IsNumber } from 'class-validator';

export class CreateProdutoDto {
  @IsInt()
  idCategoria: number;

  @IsString()
  @Length(0, 30)
  codigo: string;

  @IsString()
  @Length(0, 30)
  nome: string;

  @IsString()
  @Length(0, 30)
  descricao: string;

  @IsNumber()
  @Length(0, 30)
  valor: number;

  @IsInt()
  @Min(0, { message: 'O numero deve ser 0(Inativo) ou 1(Ativo) ' })
  @Max(1, { message: 'O numero deve ser 0(Inativo) ou 1(Ativo) ' })
  status: number;
}
