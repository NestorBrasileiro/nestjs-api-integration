import { CreateCategoriaDto } from './create-categoria.dto';
import { IsOptional } from 'class-validator';
export class UpdateCategoriaDto extends CreateCategoriaDto {
  @IsOptional()
  titulo: string;

  @IsOptional()
  codigo: string;

  @IsOptional()
  status: number;
}
