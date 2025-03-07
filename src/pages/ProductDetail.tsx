import ProductActions from '../components/product/ProductActions';
import ProductDetails from '../components/product/ProductDetails';
import ProductInfo from '../components/product/ProductInfo';
import ProductOptions from '../components/product/ProductOptions';
import RelatedProducts from '../components/product/RelatedProducts';
import ReviewProduct from '../components/product/ReviewProduct';
import StoreInfo from '../components/product/StoreInfo';
import Breadcrumb from '../components/ui/Breadcrumb';
import Carousel from '../components/ui/Carousel';

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../api/productApi';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id!),
    enabled: !!id,
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Failed to fetch product details</p>;
  if (!product) return <p className="text-center text-gray-500">Product not found</p>;

  return (
    <div className="">
      <Breadcrumb productTitle={product.title} category={product.category} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        <div className="lg:col-span-8">
          <Carousel />
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <ProductInfo product={product} />
          <ProductOptions product={product} />
          <ProductActions />
        </div>
      </div>

      <div className="mt-10">
        <ProductDetails product={product} />
        <StoreInfo />
      </div>

      <ReviewProduct />

      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
