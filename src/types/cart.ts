import { Product } from './product';

export interface CartItem extends Product {
  id: number;
  product: Product;
  duration: number;
  stock: number;
}
