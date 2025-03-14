import ProductList from './product/ProductList';

const Recommendation = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center my-7 font-bold text-2xl">Rekomendasi untuk Kamu</h2>

      <ProductList />
    </div>
  );
};

export default Recommendation;
