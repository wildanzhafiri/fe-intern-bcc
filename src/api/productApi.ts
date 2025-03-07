import axiosInstance from './axiosInstance';
import { Product } from '../types/product';

type ApiResponse = {
  status?: boolean;
  payload: Product[];
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get<ApiResponse>('/products');
    return response.data.payload;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get<ApiResponse>(`/products/category/${category}`);

    if (!response.data || !response.data.payload) {
      console.warn('No products found for category:', category);
      return [];
    }

    return Array.isArray(response.data.payload) ? response.data.payload : [];
  } catch (error) {
    console.error(`Failed to fetch products for category "${category}":`, error);
    return [];
  }
};

export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch product with ID ${id}:`, error);
    return null;
  }
};

export interface ApiProductSpecification {
  product_id: string;
  [key: string]: string;
}

export type ApiProductSpecificationResponse = {
  payload: ApiProductSpecification[];
};

export const getProductSpecifications = async (id: string): Promise<string[]> => {
  try {
    const response = await axiosInstance.get<ApiProductSpecificationResponse>(`/productspec/${id}`);
    if (!response.data || !response.data.payload || response.data.payload.length === 0) {
      return [];
    }

    const data = response.data.payload[0];

    const specifications = Object.entries(data)
      .filter(([key, value]) => key.startsWith('specification_') && typeof value === 'string' && value.trim() !== '')
      .map(([, value]) => value.trim());

    return specifications;
  } catch (error: any) {
    if (error.response?.status === 400) {
      return [];
    }

    console.error(`Failed to fetch specifications for product ID ${id}:`, error);
    return [];
  }
};

interface ProductMedia {
  id: string;
  [key: string]: string;
}

export const getProductMedia = async (id: string): Promise<string[]> => {
  try {
    const response = await axiosInstance.get<{ payload: ProductMedia[] }>(`/productmedia/${id}`);

    if (!response.data || !response.data.payload || response.data.payload.length === 0) {
      return [];
    }

    const media = response.data.payload[0];

    const images = Object.entries(media)
      .filter(([key, value]) => key.startsWith('media_') && typeof value === 'string' && value.startsWith('http'))
      .map(([, value]) => value);

    return images;
  } catch (error) {
    console.error('Gagal mengambil gambar:', error);
    return [];
  }
};

export const getSearchProduct = async (title: string): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get<ApiResponse>(`/search/${encodeURIComponent(title)}`);
    return response.data.payload as Product[];
  } catch (error) {
    console.error(`Failed to fetch product with title ${title}:`, error);
    return [];
  }
};
