import { ProductCategory } from '../types/category';

export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  location: string;
  borrower: number;
  rating: number;
  category: ProductCategory;
}
