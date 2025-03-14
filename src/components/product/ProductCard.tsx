import { PiPackage, PiLineVerticalLight } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';
import { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';

interface ProductProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductProps> = ({ product, onClick }) => {
  return (
    <div className="border border-gray-300 bg-white cursor-pointer hover:scale-105 transition-transform duration-300 rounded-2xl shadow-md h-[320px] md:h-[380px] flex flex-col" onClick={onClick}>
      <img src={product.photo_url} alt={`image of ${product.title}`} className="w-full h-44 md:h-56 object-contain rounded-t-2xl mb-2" />
      <div className="p-3 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-semibold text-sm md:text-base truncate">{product.title}</h3>
          <p className="font-bold text-primary-400 text-sm md:text-lg">Rp{formatPrice(product.price_1)}/hari</p>
        </div>
        <div>
          <p className="text-xs md:text-base truncate">{product.origin}</p>
          <div className="flex items-center text-[9px] md:text-[12px] text-gray-600">
            <PiPackage className="mr-1 w-4 h-4 md:w-5 md:h-5 text-primary-400" /> {product.rent_count} Peminjam <PiLineVerticalLight className="w-7 h-7" />
            <FaStar className="mx-1 w-2 h-2 md:w-4 md:h-4 text-primary-400" /> {product.rating}/5
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
