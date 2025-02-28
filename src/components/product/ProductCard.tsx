import { PiPackage } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';
import { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import { PiLineVerticalLight } from 'react-icons/pi';

interface ProductProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductProps> = ({ product, onClick }) => {
  const { imageUrl, title, price, location, borrower, rating } = product;

  return (
    <div className="border border-gray-300 bg-white cursor-pointer hover:scale-105 transition-transform duration-300 rounded-2xl shadow-md w-full h-[320px] md:h-[380px] flex flex-col" onClick={onClick}>
      <img src={imageUrl} alt={`image of ${title}`} className="w-full h-44 md:h-56 object-cover rounded-t-2xl mb-2" />
      <div className="p-3 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-semibold text-sm md:text-base truncate">{title}</h3>
          <p className="font-bold text-primary-400 text-sm md:text-lg">Rp{formatPrice(price)}/hari</p>
        </div>
        <div>
          <p className="text-xs md:text-base">{location}</p>
          <div className="flex items-center text-[9px] md:text-sm text-gray-600">
            <PiPackage className="mr-1 w-4 h-4 md:w-5 md:h-5" /> {borrower} Peminjam <PiLineVerticalLight className="w-7 h-7" />
            <FaStar className="mx-1 w-3 h-3 md:w-4 md:h-4 text-primary-400" /> {rating}/5
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
