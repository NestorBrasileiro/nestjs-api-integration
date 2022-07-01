import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('categorias')
export class CategoriasController {
  @Post()
  create() {
    return 'deve criar uma categoria nova e retorná-la';
  }

  @Get()
  findAll(@Query() filter: Record<string, string>) {
    return 'deve retornar todas as categorias existentes';
  }

  @Get(':id')
  findOne(@Param(':id') idCategoria: string) {
    return 'deve retornar apenas a categoria referente ao id';
  }

  @Patch(':id')
  update(
    @Param('id') idCategoria: string,
    @Body() body: Record<string, string>,
  ) {
    return 'deve atualizar e retornar apenas o status de sucesso';
  }

  @Delete(':id')
  remove(@Param('id') idCategoria: string) {
    return 'deve remover e retornar apenas o status de sucesso';
  }
}
