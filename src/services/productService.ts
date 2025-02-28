import { Product } from '../types/product';
import { dummyProducts } from '../components/data/product';

export const fetchDummyProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyProducts);
    }, 1000);
  });
};
