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
  const [message, setMessage] = useState<string | null>(null);

  const { user } = useAuth();

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(true);
    setMessage(null);

    setLoading(true);
    setMessage(null);

    try {
      const response = await addToCart(productId, count, rentDuration);
      setMessage('Berhasil menambahkan ke keranjang!');
      console.log('Cart response:', response);
    } catch (error) {
      setMessage('Gagal menambahkan ke keranjang.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex gap-4">
      <Button variant={'transparent2'} icon={<MdOutlineShoppingCart className="w-7 h-7" />} text={loading ? 'Menambahkan...' : 'Keranjang'} onClick={handleAddToCart} disabled={loading} />
      <Button variant={'third'} text="Sewa Sekarang" />
    </div>
  );
};

export default ProductActions;
