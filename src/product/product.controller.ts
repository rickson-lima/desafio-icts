import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ResponseDto } from 'src/dto/response.dto';
import { ProductCreateDto } from './dto/create-product.dto';
import { ProductUpdateDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() data: ProductCreateDto): Promise<ResponseDto> {
    return this.productService.create(data);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: String): Promise<Product | ResponseDto> {
    return this.productService.findOne(+id);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() data: ProductUpdateDto) {
    return this.productService.updateOne(+id, data);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return this.productService.deleteOne(+id);
  }
}
