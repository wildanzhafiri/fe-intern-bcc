import { FaStar } from 'react-icons/fa';
import { PiLineVerticalLight, PiPackage } from 'react-icons/pi';
import { Product } from '../../types/product';
import { CiHeart } from 'react-icons/ci';
import Button from '../ui/Button';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">{product.title}</h1>
        <Button icon={<CiHeart className="w-8 h-8" />} variant={'none'} />
      </div>
      <div className="flex items-center text-[10px] md:text-sm text-gray-600 mt-2">
        <PiPackage className="mr-1 w-4 h-4 md:w-5 md:h-5" /> {product.rent_count} Peminjam <PiLineVerticalLight className="w-5 h-5" />
        <FaStar className="mx-1 w-3 h-3 md:w-4 md:h-4 text-primary-400" /> {product.rating}/5
      </div>
    </div>
  );
};

export default ProductInfo;
