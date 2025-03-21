import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../hooks/useProduct';

interface ProductListProps {
  searchQuery?: string;
  category?: string;
  rating?: string;
  price?: string;
}

const ProductList: React.FC<ProductListProps> = ({ searchQuery = '', category = '', rating = '', price = '' }) => {
  const { data: products, isLoading, error } = useProducts(searchQuery, category, rating, price);

  const navigate = useNavigate();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Failed to fetch products</p>;

  if (!products || products.length === 0) {
    return <p className="text-center text-black text-xl my-10">Produk Tidak Ditemukan</p>;
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 my-10 max-w-screen-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => navigate(`/productDetail/${product.id}`)} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
