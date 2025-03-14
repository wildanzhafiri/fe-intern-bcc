import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

interface BreadcrumbProps {
  productTitle: string;
  category: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ productTitle, category }) => {
  const navigate = useNavigate();
  return (
    <div className="md:mt-7">
      <ul className="flex text-sm gap-1 text-[#2E4053] items-center">
        <li className="cursor-pointer hover:text-primary-400 ">
          <a href="/">Beranda</a>
        </li>
        <SlArrowRight className="w-3 h-3" />
        <li className="cursor-pointer hover:text-primary-400" onClick={() => navigate(`/category?category=${encodeURIComponent(category)}`)}>
          {category}
        </li>
        <SlArrowRight className="w-3 h-3" />
        <li className="cursor-pointer hover:text-primary-400">{productTitle}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
