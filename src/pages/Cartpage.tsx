import Cart from '../components/cart/Cart';
import Summary from '../components/cart/CartSumary';
import ProductList from '../components/product/ProductList';
import { CartProvider } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  return (
    <CartProvider>
      <div className="py-6 min-h-screen px-4 md:px-6 lg:px-0">
        <div className="flex mb-6 md:mb-8 lg:mb-10 justify-center">
          <button className="bg-primary-500 font-bold text-white w-42 px-4 rounded-l-lg py-3">Keranjang Sewa</button>
          <button onClick={() => navigate('/favorite')} className="border w-42 px-4 py-2 rounded-r-lg text-primary-500 font-bold">
            Favorit
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-4">
          <div className="flex-1">
            <Cart />
          </div>
          <div className="w-full lg:w-1/3">
            <Summary />
          </div>
        </div>

        <h2 className="text-center my-6 md:my-7 font-bold text-xl md:text-2xl">Lihat Produk Serupa</h2>

        <ProductList />
      </div>
    </CartProvider>
  );
};

export default CartPage;
