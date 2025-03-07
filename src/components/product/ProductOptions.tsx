// components/product/ProductOptions.tsx
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';

interface ProductOptionsProps {
  product: Product;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({ product }) => {
  const [count, setCount] = useState<number>(1);
  const stock = product.stock;

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x border-2 border-gray-300 rounded-lg">
        <div className="w-full md:w-1/2 p-4">
          <div className="relative w-full">
            <label className="text-gray-600">Durasi Sewa</label>
            <select className="w-full border-2 mt-2 border-gray-300 py-2 px-4 pr-10 rounded-lg transition duration-300 appearance-none">
              <option>Pilih</option>
            </select>
            <IoMdArrowDropdown className="absolute right-5 bottom-2.5 text-gray-600 w-5 h-5 pointer-events-none" />
          </div>

          <div className="mt-4">
            <label className="text-gray-600">Jumlah (stok: {stock})</label>
            <div className="flex w-full py-1 border-2 border-gray-300 rounded-lg overflow-hidden mt-2">
              <button onClick={() => count > 1 && setCount(count - 1)} className={`w-[30%] h-8 flex justify-center items-center border-r ${count === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={count === 1}>
                <FaMinus />
              </button>

              <div className="w-[40%] h-8 flex justify-center items-center text-lg font-semibold">{count}</div>

              <button onClick={() => count < stock && setCount(count + 1)} className={`w-[30%] h-8 flex justify-center items-center border-l ${count === stock ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={count === stock}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 flex items-center">
          <div>
            <label className="block text-gray-600 md:mb-2">Harga</label>
            <p className="text-2xl md:text-4xl font-semibold text-primary-400">Rp{formatPrice(product.price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
