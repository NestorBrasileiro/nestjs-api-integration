import { IsString, IsInt, IsNumber } from 'class-validator';

export class CreateProdutoDto {
  @IsInt()
  idCategoria: number;

  @IsString()
  codigo: string;

  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsNumber()
  valor: number;

  @IsInt()
  status: number;
}
