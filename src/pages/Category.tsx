import { IoMdArrowDropdown } from 'react-icons/io';
import ProductList from '../components/product/ProductList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Category = () => {
  return (
    <div className="md:my-10">
      <div className="flex justify-center">
        <div className="w-full md:w-full flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-6 lg:gap-8 ">
          <div className="relative w-full md:flex-1">
            <select
              className="w-full border border-gray-400 bg-white py-2 px-4 pr-10 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300 appearance-none 
            focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none focus:bg-primary-800 "
            >
              <option>Kategori</option>
            </select>
            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 pointer-events-none" />
          </div>

          <div className="relative w-full md:flex-1">
            <select
              className="w-full border border-gray-400 bg-white py-2 px-4 pr-10 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300 appearance-none 
            focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none focus:bg-primary-800"
            >
              <option>Penilaian</option>
            </select>
            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 pointer-events-none" />
          </div>

          <div className="relative w-full md:flex-1">
            <select
              className="w-full border border-gray-400 bg-white py-2 px-4 pr-10 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300 appearance-none 
            focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none focus:bg-primary-800"
            >
              <option>Harga</option>
            </select>
            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>

      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    </div>
  );
};

export default Category;
