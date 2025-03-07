import Button from '../ui/Button';
import { MdOutlineShoppingCart } from 'react-icons/md';

const ProductActions: React.FC = () => {
  return (
    <div className="flex gap-4">
      <Button variant={'transparent2'} icon={<MdOutlineShoppingCart className="w-7 h-7" />} text={'Keranjang'} />
      <Button variant={'third'} text="Sewa Sekarang" />
    </div>
  );
};

export default ProductActions;
