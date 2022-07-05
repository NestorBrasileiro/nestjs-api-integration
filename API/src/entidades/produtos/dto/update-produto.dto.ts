import { CreateProdutoDto } from './create-produto.dto';
import { IsOptional } from 'class-validator';

export class UpdateProdutoDto extends CreateProdutoDto {
  @IsOptional()
  idCategoria: number;

  @IsOptional()
  codigo: string;

  @IsOptional()
  nome: string;

  @IsOptional()
  descricao: string;

  @IsOptional()
  valor: number;

  @IsOptional()
  status: number;
}
