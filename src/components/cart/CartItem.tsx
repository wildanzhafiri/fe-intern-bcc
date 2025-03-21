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
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="self-start md:mr-8 mb-3 md:mb-0">
        <input type="checkbox" checked={isItemChecked(item.id)} onChange={(e) => updateCartItem(item.id, e.target.checked)} className="w-5 h-5" />
      </div>

      <div className="relative flex flex-col md:flex-row rounded-lg w-full bg-white border md:border-0">
        <div className="w-full h-48 md:w-52 md:h-52 rounded-t-xl md:rounded-t-none md:rounded-l-xl overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col p-4 md:pl-8 flex-1 md:border md:rounded-r-xl justify-center">
          <div className="flex flex-col md:flex-row md:justify-between md:pr-14">
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-indigo-700 font-bold text-xl mt-2 md:mt-0">Rp{formatPrice(item.price)}</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-10 mt-4 md:mt-3 space-y-4 md:space-y-0">
            <div className="flex flex-col">
              <div className="relative w-full flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Durasi Sewa</label>
                <select className="border py-2 rounded-lg w-full md:w-40 h-10 appearance-none px-4">
                  <option>Pilih</option>
                  <option>1 Hari</option>
                  <option>3 Hari</option>
                  <option>5 Hari</option>
                  <option>7 Hari</option>
                </select>
                <IoMdArrowDropdown className="absolute right-5 bottom-2.5 w-5 h-5 pointer-events-none text-gray-600" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Jumlah (stok: {item.stock})</label>
              <div className="flex items-center border rounded-lg w-full md:w-40 h-10 px-2">
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

        <button className="absolute bottom-40 right-4 md:bottom-5 lg:bottom-7 md:right-7 text-gray-400 hover:text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
