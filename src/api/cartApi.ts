import { CartSummaryResponse, OrderSummary } from '../types/cart';
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

export const getOrderSummary = async (): Promise<OrderSummary | null> => {
  try {
    const token = localStorage.getItem('userToken');
    if (!token) throw new Error('No authentication token found');

    const response = await axiosInstance.get('/cart/ordersummary', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.payload;
  } catch (error) {
    console.error('Failed to fetch order summary:', error);
    return null;
  }
};

export const getCartSummary = async (): Promise<CartSummaryResponse | null> => {
  try {
    const token = localStorage.getItem('userToken');
    if (!token) throw new Error('No authentication token found');

    const response = await axiosInstance.get('/cart/summary', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      payload: response.data.payload,
      totalPrice: response.data.total_price,
    };
  } catch (error) {
    console.error('Failed to fetch cart summary:', error);
    return null;
  }
};
