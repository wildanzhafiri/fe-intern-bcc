import { SlArrowRight } from 'react-icons/sl';

const Breadcrumb: React.FC = () => {
  return (
    <div className="md:mt-7">
      <ul className="flex text-xs gap-1 text-[#2E4053] items-center">
        <li className="cursor-pointer hover:text-black rounded-md">
          <a href="/">Beranda</a>
        </li>
        <SlArrowRight className="w-3 h-3" />
        <li className="cursor-pointer hover:text-black rounded-md transition-all duration-300">Kategori</li>
        <SlArrowRight className="w-3 h-3" />
        <li className="cursor-pointer hover:text-black rounded-md transition-all duration-300">Nama Produk</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
