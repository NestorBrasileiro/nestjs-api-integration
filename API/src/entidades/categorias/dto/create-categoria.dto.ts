import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  codigo: string;

  @IsString()
  titulo: string;

  @IsInt()
  status: number;
}
