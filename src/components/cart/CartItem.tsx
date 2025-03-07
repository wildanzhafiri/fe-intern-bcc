import { useState } from 'react';
import { Cart } from '../../types/cart';
import { useCart } from '../../contexts/CartContext';
import { FaTrash } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { formatPrice } from '../../utils/formatPrice';

interface CartItemProps {
  item: Cart;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { updateCartItem, isItemChecked } = useCart();

  return (
    <div className="flex items-center">
      <div className="mr-8">
        <input type="checkbox" checked={isItemChecked(item.id)} onChange={(e) => updateCartItem(item.id, e.target.checked)} className="w-5 h-5" />
      </div>

      <div className="relative flex rounded-lg w-full bg-white">
        <div className="w-52 h-52 rounded-l-xl overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col pl-8 flex-1 border rounded-r-xl justify-center">
          <div className="flex justify-between pr-14">
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-indigo-700 font-bold text-xl">Rp{formatPrice(item.price)}</p>
          </div>

          <div className="flex items-center gap-10 mt-3">
            <div className="flex flex-col">
              <div className="relative w-full flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Durasi Sewa</label>
                <select className="border py-2 rounded-lg w-40 h-10 appearance-none px-4">
                  <option>Pilih</option>
                  <option>1 Hari</option>
                  <option>1 Minggu</option>
                </select>
                <IoMdArrowDropdown className="absolute right-5 bottom-2.5 w-5 h-5 pointer-events-none text-gray-600" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Jumlah (stok: {item.stock})</label>
              <div className="flex items-center border rounded-lg w-40 h-10 px-2">
                <button className="w-[30%] border-r text-xl font-bold text-gray-700" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  −
                </button>
                <span className="w-[40%] text-center text-lg">{quantity}</span>
                <button className="w-[30%] border-l text-xl font-bold text-gray-700" onClick={() => setQuantity(Math.min(item.stock, quantity + 1))}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <button className="absolute bottom-7 right-7 text-gray-400 hover:text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
