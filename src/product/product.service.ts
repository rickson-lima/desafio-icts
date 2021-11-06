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

  // TODO: REFATORAR RETORNOS
  async create(data: ProductCreateDto): Promise<ResponseDto> {
    const product = new Product();

    product.name = data.name;
    product.description = data.description;
    product.price = data.price;
    product.image_url = data.image_url;

    try {
      await this.productRepository.save(product);
      return <ResponseDto>{
        statusCode: 201,
        message: 'Product successfully created',
      };
    } catch (error) {
      return <ResponseDto>{
        statusCode: 500,
        message: error,
      };
    }
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product | ResponseDto> {
    try {
      const product = await this.productRepository.findOne(id);

      if (!product)
        return <ResponseDto>{
          statusCode: 404,
          message: 'Product not found',
        };

      return product;
    } catch (error) {
      return <ResponseDto>{
        statusCode: 500,
        message: error,
      };
    }
  }

  async updateOne(id: number, data: ProductUpdateDto): Promise<ResponseDto> {
    let { name, description, price, image_url } = data;
    const product = new Product();

    try {
      const productFromDB = await this.productRepository.findOne(id);

      product.name = name || productFromDB.name;
      product.description = description || productFromDB.description;
      product.price = price || productFromDB.price;
      product.image_url = image_url || productFromDB.image_url;

      await this.productRepository.update(id, product);

      return <ResponseDto>{
        statusCode: 200,
        message: 'Product successfully updated',
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
      return <ResponseDto>{
        statusCode: 500,
        message: error,
      };
    }
  }
}
