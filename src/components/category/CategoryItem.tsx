import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryItemProps {
  name: string;
  icon: React.ReactNode;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, icon }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/category')}>
      <div className="w-32 h-32 flex items-center justify-center border border-gray-300 rounded-md hover:scale-105 transition-transform duration-300">
        <div className="text-5xl">{icon}</div>
      </div>
      <p className="mt-2 text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
};

export default CategoryItem;
