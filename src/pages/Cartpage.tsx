import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Cart from '../components/cart/Cart';
import Summary from '../components/cart/CartSumary';
import ProductList from '../components/product/ProductList';
import { CartProvider } from '../contexts/CartContext';

const queryClient = new QueryClient();

const CartPage = () => {
  return (
    <CartProvider>
      <div className="py-6 min-h-screen">
        <div className="flex mb-10 justify-center">
          <button className="bg-primary-500 font-bold text-white w-42 px-2 rounded-l-lg py-3">Keranjang Sewa</button>
          <button className="border w-42 px-2 py-2 rounded-r-lg text-primary-500 font-bold">Favorit</button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <Cart />
          </div>
          <div className="w-full lg:w-1/3">
            <Summary />
          </div>
        </div>

        <h2 className="text-center my-7 font-bold text-2xl">Lihat Produk Serupa</h2>

        <QueryClientProvider client={queryClient}>
          <ProductList />
        </QueryClientProvider>

        <div className="text-center mt-6">
          <button className="border px-4 py-2 rounded">Lihat Produk Lain</button>
        </div>
      </div>
    </CartProvider>
  );
};

export default CartPage;
