import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductsByCategory, getProductById, getProductSpecifications, getProductMedia, getSearchProduct } from '../api/productApi';
import { Product } from '../types/product';

export const useProducts = (searchQuery = '', category = '') => {
  return useQuery<Product[], Error>({
    queryKey: ['products', searchQuery, category],
    queryFn: () => {
      if (category) {
        return getProductsByCategory(category);
      }
      if (searchQuery) {
        return getSearchProduct(searchQuery);
      }
      return getProducts();
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery<Product[]>({
    queryKey: ['products', category],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category,
    staleTime: 1000 * 60 * 5,
  });
};

export const useProductById = (id: string) => {
  return useQuery<Product | null>({
    queryKey: ['product', id],
    queryFn: async () => await getProductById(id),
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
