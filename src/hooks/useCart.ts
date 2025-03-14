import { useQuery } from '@tanstack/react-query';
import { getCartByUser, getCartSummary, getOrderSummary } from '../api/cartApi';
import { CartSummaryResponse, OrderSummary } from '../types/cart';

export const useCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: getCartByUser,
  });
};

export const useOrderSummary = () => {
  return useQuery<OrderSummary | null>({
    queryKey: ['orderSummary'],
    queryFn: getOrderSummary,
  });
};

export const useCartSummary = () => {
  return useQuery<CartSummaryResponse | null>({
    queryKey: ['cartSummary'],
    queryFn: getCartSummary,
  });
};
