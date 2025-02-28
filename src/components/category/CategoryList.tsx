import React from 'react';
import CategoryItem from '../category/CategoryItem';
import { categories } from '../../components/data/category.tsx';

const CategoryList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto w-fit">
      {categories.map((category) => (
        <CategoryItem key={category.id} name={category.name} icon={category.icon} />
      ))}
    </div>
  );
};

export default CategoryList;
