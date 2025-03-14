export interface Cart {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  checked: boolean;
  storeId: number;
  storeName: string;
}

export interface CartSummary {
  user_id: string;
  product_count: number;
  delivery_cost: number;
  service_cost: number;
  deposite_amount: number;
  deposite_percentage: number;
  voucher: number;
  total_price: number;
}
