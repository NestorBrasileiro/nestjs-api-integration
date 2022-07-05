import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  codigo: string;

  @IsString()
  @Length(0, 50)
  titulo: string;

  @IsInt()
  @Min(0, { message: 'O numero deve ser 0(Inativo) ou 1(Ativo) ' })
  @Max(1, { message: 'O numero deve ser 0(Inativo) ou 1(Ativo) ' })
  status: number;
}
