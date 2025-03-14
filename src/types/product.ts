export interface Product {
  id: string;
  title: string;
  description: string;
  Specification: string;
  category: string;
  origin: string;
  seller_id?: string;
  price_1: number;
  price_3: number;
  price_5: number;
  price_7: number;
  stock: number;
  rent_count: number;
  rating: number;
  photo_url: string;
  created_at: string;
  updated_at: string;
}
