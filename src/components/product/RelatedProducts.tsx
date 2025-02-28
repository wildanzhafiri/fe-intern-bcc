import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ProductList from './ProductList';
const queryClient = new QueryClient();

const RelatedProducts = () => {
  return (
    <div className="border-t mt-2">
      <div className="my-8">
        <h2 className="text-center font-bold text-2xl">Lihat Produk Serupa</h2>
        <QueryClientProvider client={queryClient}>
          <ProductList />
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default RelatedProducts;
