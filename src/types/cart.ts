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

export interface OrderSummary {
  user_id: string;
  product_count: number;
  delivery_cost: number;
  service_cost: number;
  deposite_amount: number;
  deposite_percentage: number;
  voucher: number;
  total_price: number;
}

export interface CartSummary {
  name: string;
  count: number;
  price: number;
}

export interface CartSummaryResponse {
  payload: CartSummary[];
  totalPrice: number;
}
