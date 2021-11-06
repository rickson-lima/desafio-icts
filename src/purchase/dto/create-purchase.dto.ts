import { Product } from 'src/product/product.entity';

export interface PurchaseCreateDto {
  total: number;
  payment_method: String;
  status: String;
  products: Product[];
}
