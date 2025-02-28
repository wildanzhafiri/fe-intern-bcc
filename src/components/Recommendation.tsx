import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductList from './product/ProductList';

const queryClient = new QueryClient();

const Recommendation = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center my-7 font-bold text-2xl">Rekomendasi untuk Kamu</h2>
      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    </div>
  );
};

export default Recommendation;
