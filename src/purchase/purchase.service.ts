import { Injectable, Inject } from '@nestjs/common';
import { PurchaseCreateDto } from './dto/create-purchase.dto';
import { PurchaseUpdateDto } from './dto/update-purchase.dto';
import { Product } from 'src/product/product.entity';
import { ResponseDto } from 'src/dto/response.dto';
import { Purchase } from './purchase.entity';
import { Repository } from 'typeorm';

export function CalculateTotalPurchase(products: Product[]) {
  let total = 0;
  products.map((prod) => (total += prod.price));
  return total;
}

@Injectable()
export class PurchaseService {
  constructor(
    @Inject('PURCHASE_REPOSITORY')
    private purchaseRepository: Repository<Purchase>,
  ) {}

  async create(data: PurchaseCreateDto): Promise<ResponseDto> {
    const purchase = new Purchase();

    purchase.payment_method = data.payment_method;
    purchase.status = data.status;
    purchase.total = CalculateTotalPurchase(data.products);
    purchase.products = data.products;

    try {
      await this.purchaseRepository.save(purchase);
      return <ResponseDto>{
        statusCode: 201,
        message: 'Purchase successfully created',
      };
    } catch (error) {
      return <ResponseDto>{
        statusCode: 500,
        message: error,
      };
    }
  }

  async findAll(): Promise<Purchase[]> {
    return await this.purchaseRepository.find({
      relations: ['products'],
    });
  }

  async findOne(id: number): Promise<Purchase | ResponseDto> {
    try {
      const purchase = await this.purchaseRepository.findOne(id);

      if (!purchase)
        return <ResponseDto>{
          statusCode: 404,
          message: 'Purchase not found',
        };

      return purchase;
    } catch (error) {
      return <ResponseDto>{
        statusCode: 500,
        message: error,
      };
    }
  }

  async updateOne(id: number, data: PurchaseUpdateDto): Promise<ResponseDto> {
    const { payment_method, status, products } = data;
    try {
      const purchase = await this.purchaseRepository.findOne(id);

      purchase.payment_method = payment_method || purchase.payment_method;
      purchase.total = CalculateTotalPurchase(products) || purchase.total;
      purchase.products = products || purchase.products;
      purchase.status = status || purchase.status;

      await this.purchaseRepository.save(purchase);

      return <ResponseDto>{
        statusCode: 200,
        message: 'Purchase successfully updated',
      };
    } catch (error) {
      return <ResponseDto>{
        statusCode: 500,
        message: error,
      };
    }
  }

  async deleteOne(id: number): Promise<ResponseDto> {
    try {
      const purchaseResult = await this.purchaseRepository.delete(id);

      if (purchaseResult.affected === 0)
        return <ResponseDto>{
          statusCode: 404,
          message: 'Purchase not found',
        };

      return <ResponseDto>{
        statusCode: 200,
        message: 'Purchase successfully deleted',
      };
    } catch (error) {
      return <ResponseDto>{
        statusCode: 500,
        message: error,
      };
    }
  }
}
