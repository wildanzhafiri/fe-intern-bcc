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
import { useState } from 'react';
import { useProductById } from '../hooks/useProduct';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useProductById(id);

  const [count, setCount] = useState<number>(1);
  const [rentDuration, setRentDuration] = useState<number>(1);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error || !data) return <p className="text-center text-red-500">Failed to fetch product details</p>;

  const { product, seller } = data;

  return (
    <div className="">
      <Breadcrumb productTitle={product.title} category={product.category} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        <div className="lg:col-span-8">
          <Carousel />
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <ProductInfo product={product} />
          <ProductOptions product={product} count={count} setCount={setCount} rentDuration={rentDuration} setRentDuration={setRentDuration} />
          <ProductActions productId={product.id} count={count} rentDuration={rentDuration} />
        </div>
      </div>

      <div className="mt-10">
        <ProductDetails product={product} />
        <StoreInfo seller={seller} />
      </div>

      <ReviewProduct />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
