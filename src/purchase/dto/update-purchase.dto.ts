import { Product } from 'src/product/product.entity';

export interface PurchaseUpdateDto {
  total: number;
  payment_method: String;
  status: String;
  products: Product[];
}
