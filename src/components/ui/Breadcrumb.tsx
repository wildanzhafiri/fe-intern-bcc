import { SlArrowRight } from 'react-icons/sl';

interface BreadcrumbProps {
  productTitle: string;
  category: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ productTitle, category }) => {
  return (
    <div className="md:mt-7">
      <ul className="flex text-xs gap-1 text-[#2E4053] items-center">
        <li className="cursor-pointer hover:text-black rounded-md">
          <a href="/">Beranda</a>
        </li>
        <SlArrowRight className="w-3 h-3" />
        <li className="cursor-pointer hover:text-black rounded-md transition-all duration-300">{category}</li>
        <SlArrowRight className="w-3 h-3" />
        <li className="cursor-pointer hover:text-black rounded-md transition-all duration-300">{productTitle}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
