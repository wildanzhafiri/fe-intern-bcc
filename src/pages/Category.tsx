import { IoMdArrowDropdown } from 'react-icons/io';
import ProductList from '../components/product/ProductList';

import { useSearchParams } from 'react-router-dom';

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const rating = searchParams.get('rating') || '';
  const priceSort = searchParams.get('price') || '';

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    searchParams.set('category', selectedCategory);
    setSearchParams(searchParams);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('rating', e.target.value);
    setSearchParams(searchParams);
  };

  const handlePriceSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('price', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div className="md:my-10">
      <div className="flex justify-center">
        <div className="w-full md:max-w-7xl md:px-6 lg:px-8 flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-6 lg:gap-8 ">
          <div className="relative w-full md:flex-1">
            <select
              className="w-full border border-gray-400 bg-white py-2 px-4 pr-10 rounded-lg shadow-sm  transition duration-300 appearance-none 
            focus:border-primary-400 focus:outline-none  "
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Semua Kategori</option>
              <option value="electronics">Alat Elektronik</option>
              <option value="tools">Perkakas</option>
              <option value="hobby">Hobi</option>
              <option value="events">Acara</option>
              <option value="holiday">Liburan</option>
            </select>
            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 pointer-events-none" />
          </div>

          <div className="relative w-full md:flex-1">
            <select
              className="w-full border border-gray-400 bg-white py-2 px-4 pr-10 rounded-lg shadow-sm  transition duration-300 appearance-none 
              focus:border-primary-400 focus:outline-none "
              value={rating}
              onChange={handleRatingChange}
            >
              <option value="">Penilaian</option>
              <option value="5">★★★★★ </option>
              <option value="4">★★★★☆ </option>
              <option value="3">★★★☆☆ </option>
              <option value="2">★★☆☆☆ </option>
              <option value="1">★☆☆☆☆ </option>
            </select>
            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 pointer-events-none" />
          </div>

          <div className="relative w-full md:flex-1">
            <select
              className="w-full border border-gray-400 bg-white py-2 px-4 pr-10 rounded-lg shadow-sm  transition duration-300 appearance-none 
              focus:border-primary-400 focus:outline-none "
              value={priceSort}
              onChange={handlePriceSortChange}
            >
              <option value="">Harga</option>
              <option value="highest">Tertinggi</option>
              <option value="lowest">Terendah</option>
            </select>
            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>

      <ProductList searchQuery={searchQuery} category={category} rating={rating} price={priceSort} />
    </div>
  );
};

export default Category;
