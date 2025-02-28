import ProductActions from '../components/product/ProductActions';
import ProductDetails from '../components/product/ProductDetails';
import ProductInfo from '../components/product/ProductInfo';
import ProductOptions from '../components/product/ProductOptions';
import RelatedProducts from '../components/product/RelatedProducts';
import ReviewProduct from '../components/product/ReviewProduct';
import StoreInfo from '../components/product/StoreInfo';
import Breadcrumb from '../components/ui/Breadcrumb';
import Carousel from '../components/ui/Carousel';

const ProductDetail = () => {
  return (
    <div className="">
      <Breadcrumb />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        <div className="lg:col-span-8">
          <Carousel />
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <ProductInfo />
          <ProductOptions />
          <ProductActions />
        </div>
      </div>

      <div className="mt-10">
        <ProductDetails />
        <StoreInfo />
      </div>

      <ReviewProduct />

      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
