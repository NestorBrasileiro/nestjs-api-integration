import { CreateEstoqueDto } from './create-estoque.dto';
import { IsOptional } from 'class-validator';

export class UpdateEstoqueDto extends CreateEstoqueDto {
  @IsOptional()
  idProduto: number;
}
