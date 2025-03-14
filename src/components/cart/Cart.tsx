import { useCart } from '../../contexts/CartContext';
import CartItem from '../../components/cart/CartItem';
import { FaStore, FaTrash } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, updateCartByStore, isStoreChecked } = useCart();

  const groupedItems = cartItems.reduce((acc, item) => {
    if (!acc[item.storeId]) {
      acc[item.storeId] = {
        storeName: item.storeName,
        storeId: item.storeId,
        items: [],
      };
    }
    acc[item.storeId].items.push(item);
    return acc;
  }, {} as Record<number, { storeName: string; storeId: number; items: typeof cartItems }>);

  return (
    <div className="rounded-lg bg-white mb-6 md:mb-0">
      {Object.values(groupedItems).map(({ storeName, storeId, items }) => (
        <div key={storeId} className="p-4 flex flex-col gap-3">
          <div className="flex items-center">
            <input type="checkbox" checked={isStoreChecked(storeId)} onChange={(e) => updateCartByStore(storeId, e.target.checked)} className="w-5 h-5 mr-3 md:mr-10" />
            <div className="flex items-center gap-2 flex-grow">
              <FaStore className="text-gray-500" />
              <span className="font-semibold text-base md:text-lg">{storeName}</span>
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <FaTrash />
            </button>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
