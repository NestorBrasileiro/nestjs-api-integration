import { IsInt } from 'class-validator';

export class CreateEstoqueDto {
  @IsInt()
  idProduto: number;

  @IsInt()
  quantidade: number = 0;

  @IsInt()
  reserva: number = 0;

  @IsInt()
  status: number = 0;
}
