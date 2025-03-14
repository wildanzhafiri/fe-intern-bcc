import ProductList from '../components/product/ProductList';
import { useNavigate } from 'react-router-dom';

const Favorite = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6 min-h-screen">
      <div className="flex mb-10 justify-center">
        <button onClick={() => navigate('/cartpage')} className="border text-primary-500 font-bold w-42 px-2 rounded-l-lg py-3">
          Keranjang Sewa
        </button>
        <button className="bg-primary-500 font-bold text-white w-42 px-2 py-2 rounded-r-lg ">Favorit</button>
      </div>
      <div className="mb-20">
        <h2 className="text-center text-xl font-semibold">Belum ada produk yang ditambahkan ke favorit</h2>
      </div>

      <h2 className="text-center my-7 font-bold text-2xl">Lihat Produk Serupa</h2>

      <ProductList />
    </div>
  );
};

export default Favorite;
