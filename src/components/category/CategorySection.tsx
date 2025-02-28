import CategoryList from './CategoryList';

const CategorySection = () => {
  return (
    <div className="bg-white drop-shadow-lg py-6 px-8 rounded-xl mb-5 w-fit mx-auto">
      <h2 className="text-center mb-5 font-bold text-2xl">Kategori</h2>
      <CategoryList />
    </div>
  );
};

export default CategorySection;
