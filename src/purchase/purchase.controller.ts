import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Purchase } from './purchase.entity';
import { ResponseDto } from 'src/dto/response.dto';
import { PurchaseService } from './purchase.service';
import { PurchaseCreateDto } from './dto/create-purchase.dto';
import { PurchaseUpdateDto } from './dto/update-purchase.dto';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  async create(@Body() data: PurchaseCreateDto): Promise<ResponseDto> {
    return this.purchaseService.create(data);
  }

  @Get()
  async findAll(): Promise<Purchase[]> {
    return this.purchaseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: String): Promise<Purchase | ResponseDto> {
    return this.purchaseService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: PurchaseUpdateDto) {
    return this.purchaseService.updateOne(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ResponseDto> {
    return this.purchaseService.deleteOne(+id);
  }
}
