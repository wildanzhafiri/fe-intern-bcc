import React from 'react';
import { formatPrice } from '../../utils/formatPrice';

interface OrderItemProps {
  name: string;
  price: number;
  quantity: number;
  duration: number;
  imageUrl: string;
}

const OrderItem: React.FC<OrderItemProps> = ({ name, price, quantity, duration, imageUrl }) => {
  return (
    <div className="flex max-w-6xl items-center p-4 ">
      <div className="flex items-center gap-4 w-[30%]">
        <img src={imageUrl} alt={name} className="w-40 h-40 rounded-lg object-cover" />
        <h3 className="text-lg font-semibold line-clamp-2">{name}</h3>
      </div>

      <div className="flex justify-evenly w-[70%]">
        <div className="flex flex-col">
          <p className="text-sm text-secondary-300">Harga Sewa:</p>
          <p className="text-[#00378b]">Rp{formatPrice(price)}/hari</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-sm text-secondary-300">Jumlah:</p>
          <p>{quantity}</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-sm text-secondary-300">Durasi Sewa:</p>
          <p>{duration} hari</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-sm text-secondary-300">Subtotal:</p>
          <p className="text-[#00378b] font-bold">Rp{formatPrice(price * duration)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
