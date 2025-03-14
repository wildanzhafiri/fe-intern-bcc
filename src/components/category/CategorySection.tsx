import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface Category {
  id: number;
  name: string;
  icon: string;
  value: string;
}

const categories: Category[] = [
  { id: 1, name: 'Alat Elektronik', icon: 'fa6-solid:computer', value: 'electronics' },
  { id: 2, name: 'Perkakas', icon: 'game-icons:family-house', value: 'tools' },
  { id: 3, name: 'Hobi', icon: 'ph:beach-ball-fill', value: 'hobby' },
  { id: 4, name: 'Acara', icon: 'carbon:event', value: 'events' },
  { id: 5, name: 'Liburan', icon: 'jam:plane', value: 'holiday' },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (value: string) => {
    navigate(`/category?category=${encodeURIComponent(value)}`);
  };

  return (
    <div className="bg-white drop-shadow-lg py-6 px-8 rounded-xl mb-5 w-fit mx-auto">
      <h2 className="text-center mb-5 font-bold text-2xl">Kategori</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto w-fit">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center cursor-pointer" onClick={() => handleCategoryClick(category.value)}>
            <div className="w-32 h-32 flex items-center justify-center border border-gray-300 rounded-md hover:scale-110 transition-transform duration-300">
              <Icon icon={category.icon} className="text-5xl text-primary-400" />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
