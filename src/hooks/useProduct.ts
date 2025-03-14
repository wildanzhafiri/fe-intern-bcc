import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory, getProductById, getProductSpecifications, getProductMedia, getFilteredProducts } from '../api/productApi';
import { Product } from '../types/product';
import { Owner } from '../types/owner';

export const useProducts = (searchQuery = '', category = '', rating = '', price = '') => {
  return useQuery<Product[]>({
    queryKey: ['products', searchQuery, category, rating, price],
    queryFn: async () => {
      return await getFilteredProducts(category, rating, price, searchQuery);
    },
    staleTime: 1000 * 60 * 1,
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery<Product[]>({
    queryKey: ['products', category],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category,
    staleTime: 1000 * 60 * 1,
  });
};

export const useProductById = (id?: string) => {
  return useQuery<{ product: Product; seller: Owner } | null>({
    queryKey: ['product', id],
    queryFn: async () => {
      if (!id) throw new Error('Product ID is required');
      return getProductById(id);
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export const useProductSpecifications = (id: string) => {
  return useQuery<string[]>({
    queryKey: ['product-specifications', id],
    queryFn: () => getProductSpecifications(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export const useProductMedia = (id?: string) => {
  return useQuery({
    queryKey: ['productMedia', id],
    queryFn: () => getProductMedia(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
