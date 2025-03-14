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
    <div className="flex flex-col md:flex-row max-w-6xl items-start md:items-center p-4 space-y-4 md:space-y-0">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-[30%]">
        <img src={imageUrl} alt={name} className=" w-24 md:w-28 lg:w-40 h-24 md:h-28 lg:h-40 rounded-lg object-cover" />

        <h3 className="text-lg font-semibold mt-2 sm:mt-0 line-clamp-2 md:line-clamp-none lg:line-clamp-2">{name}</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:flex md:justify-evenly w-full md:w-[70%]">
        <div className="flex flex-col">
          <p className="text-sm text-secondary-300">Harga Sewa:</p>
          <p className="text-[#00378b]">Rp{formatPrice(price)}/hari</p>
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-secondary-300">Jumlah:</p>
          <p>{quantity}</p>
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-secondary-300">Durasi Sewa:</p>
          <p>{duration} hari</p>
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-secondary-300">Subtotal:</p>
          <p className="text-[#00378b] font-bold">Rp{formatPrice(price * quantity * duration)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
