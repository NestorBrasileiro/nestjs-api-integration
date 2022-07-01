import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  create(@Body() body: CreateCategoriaDto) {
    return this.categoriasService.create(body);
  }

  @Get()
  findAll(@Query() filter: Record<string, string>) {
    return this.categoriasService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param(':id') idCategoria: string) {
    return this.categoriasService.findOne(idCategoria);
  }

  @HttpCode(204)
  @Patch(':id')
  update(@Param('id') idCategoria: string, @Body() body: UpdateCategoriaDto) {
    return this.categoriasService.update(idCategoria, body);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') idCategoria: string) {
    return this.categoriasService.remove(idCategoria);
  }
}
