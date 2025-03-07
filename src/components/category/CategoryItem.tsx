import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryItemProps {
  name: string;
  icon: React.ReactNode;
  value: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, icon, value }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/category?category=${encodeURIComponent(value)}`);
  };

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={handleClick}>
      <div className="w-32 h-32 flex items-center justify-center border border-gray-300 rounded-md hover:scale-105 transition-transform duration-300">
        <div className="text-5xl text-primary-400">{icon}</div>
      </div>
      <p className="mt-2 text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
};

export default CategoryItem;
