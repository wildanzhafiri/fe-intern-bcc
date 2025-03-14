import { useState } from 'react';
import Button from '../ui/Button';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { addToCart } from '../../api/cartApi';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface Props {
  productId: string;
  count: number;
  rentDuration: number;
}

const ProductActions: React.FC<Props> = ({ productId, count, rentDuration }) => {
  const [loading, setLoading] = useState(false);
  const [renting, setRenting] = useState(false);

  const { user } = useAuth();

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(true);

    try {
      await addToCart(productId, count, rentDuration);
      navigate('/cartpage');
    } catch (error) {
      alert('Gagal menambahkan ke keranjang. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleRentNow = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setRenting(true);
    try {
      await addToCart(productId, count, rentDuration);
      navigate('/payment');
    } catch (error) {
      alert('Gagal melakukan sewa. Silakan coba lagi.');
    } finally {
      setRenting(false);
    }
  };

  return (
    <div className="flex gap-4">
      <Button variant={'transparent2'} icon={<MdOutlineShoppingCart className="w-7 h-7" />} text={loading ? 'Menambahkan...' : 'Keranjang'} onClick={handleAddToCart} disabled={loading} />
      <Button variant={'third'} text={renting ? 'Memproses...' : 'Sewa Sekarang'} onClick={handleRentNow} disabled={renting} />
    </div>
  );
};

export default ProductActions;
