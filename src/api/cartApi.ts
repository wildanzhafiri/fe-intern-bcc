import { CartSummary } from '../types/cart';
import axiosInstance from './axiosInstance';

export const addToCart = async (productId: string, count: number, rentDuration: number) => {
  try {
    const token = localStorage.getItem('userToken');
    if (!token) throw new Error('No authentication token found');

    const response = await axiosInstance.post(
      '/cart/',
      {
        product_id: productId,
        count,
        rent_duration: rentDuration,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Failed to add product to cart:', error);
    throw error;
  }
};

export const getCartByUser = async () => {
  try {
    const token = localStorage.getItem('userToken');
    if (!token) throw new Error('No authentication token found');

    const response = await axiosInstance.get('/cart/cartuser', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.payload;
  } catch (error) {
    console.error('Failed to fetch user cart:', error);
    throw error;
  }
};

export const getCartSummary = async (): Promise<CartSummary> => {
  const token = localStorage.getItem('userToken');
  if (!token) throw new Error('No authentication token found');

  const response = await axiosInstance.get('/cart/summary', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data.payload;
};
