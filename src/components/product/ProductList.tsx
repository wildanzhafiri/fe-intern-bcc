import { useQuery } from '@tanstack/react-query';
import { fetchDummyProducts } from '../../services/productService';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchDummyProducts,
  });

  const navigate = useNavigate();

  return (
    <div className="my-10">
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  space-y-6 gap-x-3 md:space-y-6 md:gap-x-6 mx-auto max-w-screen-xl">
          {products?.map((product) => (
            <ProductCard onClick={() => navigate('/productDetail')} key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
