import axiosInstance from './axiosInstance';
import { PublicOwner } from '../types/owner';

export const getPublicSellerInfo = async (sellerId: string): Promise<PublicOwner | null> => {
  try {
    const response = await axiosInstance.get(`/seller/info/${sellerId}`);
    return response.data.payload;
  } catch (error) {
    console.error(`Failed to fetch seller info for seller_id: ${sellerId}`);
    return null;
  }
};
