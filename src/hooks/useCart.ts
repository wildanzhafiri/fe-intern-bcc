import { useQuery } from '@tanstack/react-query';
import { getCartByUser, getCartSummary } from '../api/cartApi';
import { CartSummary } from '../types/cart';

export const useCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: getCartByUser,
  });
};

export const useCartSummary = () => {
  return useQuery<CartSummary>({
    queryKey: ['cartSummary'],
    queryFn: getCartSummary,
  });
};
