import { Injectable, Inject } from '@nestjs/common';
import { ResponseDto } from 'src/dto/response.dto';
import { Repository } from 'typeorm';
import { ProductCreateDto } from './dto/create-product.dto';
import { ProductUpdateDto } from './dto/update-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async create(data: ProductCreateDto): Promise<ResponseDto> {
    let { name, price, description } = data;
    if (!name || !price || !description)
      return <ResponseDto>{
        statusCode: 400,
        message: 'Product name, description and price are required.',
      };

    let product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;

    try {
      await this.productRepository.save(product);
      return <ResponseDto>{
        statusCode: 201,
        message: 'Product successfully created',
      };
    } catch (error) {
      return <ResponseDto>{
        statusCode: 500,
        message: 'Product not created',
      };
    }
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product | ResponseDto> {
    try {
      const productResult = await this.productRepository.findOne(id);

      if (!productResult)
        return <ResponseDto>{
          statusCode: 404,
          message: 'Product not found',
        };

      return productResult;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: ProductUpdateDto) {
    let { name, price, description } = data;
    if (!name || !price || !description)
      return <ResponseDto>{
        statusCode: 400,
        message: 'Product name, description and price are required.',
      };

    let product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;

    try {
      const productResult = await this.productRepository.update(id, product);
      if (productResult.affected === 0) {
        return <ResponseDto>{
          statusCode: 404,
          message: 'Product not found',
        };
      }

      return <ResponseDto>{
        statusCode: 201,
        message: 'Product successfully updated',
      };
    } catch (error) {
      return <ResponseDto>{
        statusCode: 500,
        message: 'Product not updated',
      };
    }
  }

  async remove(id: number) {
    try {
      const productResult = await this.productRepository.delete(id);

      if (productResult.affected === 0)
        return <ResponseDto>{
          statusCode: 404,
          message: 'Product not found',
        };

      return <ResponseDto>{
        statusCode: 200,
        message: 'Product successfully deleted',
      };
    } catch (error) {
      return error;
    }
  }
}
