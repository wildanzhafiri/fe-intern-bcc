import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const ProductOptions: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const stock = 2;

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x border rounded-lg">
        <div className="w-full md:w-1/2 p-4">
          <div className="relative w-full">
            <label className="text-gray-600">Durasi Sewa</label>
            <select className="w-full border mt-2 border-gray-300 bg-white py-2 px-4 pr-10 rounded-lg hover:bg-gray-200 transition duration-300 appearance-none">
              <option>Pilih</option>
            </select>
            <IoMdArrowDropdown className="absolute right-5 bottom-2.5 text-gray-600 w-5 h-5 pointer-events-none" />
          </div>

          <div className="mt-4">
            <label className="text-gray-600">Jumlah (stok: {stock})</label>
            <div className="flex w-full border rounded-lg overflow-hidden mt-2">
              <button
                onClick={() => {
                  if (count > 1) setCount(count - 1);
                }}
                className={`w-1/3 h-12 flex justify-center items-center border-r bg-white ${count === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                disabled={count === 1}
              >
                <FaMinus />
              </button>

              <div className="w-1/3 h-12 flex justify-center bg-white items-center text-lg font-semibold">{count}</div>

              <button
                onClick={() => {
                  if (count < stock) setCount(count + 1);
                }}
                className={`w-1/3 h-12 flex justify-center items-center border-l bg-white ${count === stock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                disabled={count === stock}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 flex items-center">
          <div>
            <label className="block text-gray-600 md:mb-2">Harga</label>
            <p className="text-2xl md:text-4xl font-semibold text-primary-400">Rp77.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
