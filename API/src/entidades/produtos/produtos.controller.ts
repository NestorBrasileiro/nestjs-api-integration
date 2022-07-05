import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
  NotImplementedException,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { EstoquesService } from '../estoques/estoques.service';
import { UpdateEstoqueDto } from '../estoques/dto/update-estoque.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(
    private readonly produtosService: ProdutosService,
    private readonly estoqueService: EstoquesService,
  ) {}

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  findAll(@Query() filter: Record<string, any>) {
    return this.produtosService.findAll(filter);
  }

  @Get(':id/estoque')
  findEstoque(@Param('id') id: string) {
    return this.estoqueService.findOne(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id/estoque')
  updateEstoque(
    @Param('id') id: number,
    @Body() updateEstoque: UpdateEstoqueDto,
  ) {
    return this.estoqueService.update(id, updateEstoque);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(id, updateProdutoDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id/estoque')
  removeEstoque(@Param('id') id: string) {
    return this.estoqueService.remove(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    throw new NotImplementedException('Não se pode deletar um estoque ;)');
  }
}
