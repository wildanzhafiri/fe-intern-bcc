import React from 'react';
import { formatPrice } from '../../utils/formatPrice';

interface StoreItem {
  name: string;
  price: number;
  quantity: number;
  duration: number;
  imageUrl: string;
}

interface Store {
  name: string;
  items: StoreItem[];
}

interface OrderSummaryProps {
  stores: Store[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ stores }) => {
  // Hitung subtotal dari semua toko
  const subtotal = stores.reduce((total, store) => total + store.items.reduce((storeTotal, item) => storeTotal + item.price * item.duration, 0), 0);
  const shippingFee = 10000;
  const serviceFee = 2000;
  const deposit = subtotal * 0.25;
  const discount = 92000;
  const total = subtotal + shippingFee + serviceFee + deposit - discount;

  return (
    <div className="border border-gray-300 rounded-r-lg">
      <div className="px-10 py-14 md:rounded-none flex flex-col justify-between">
        <h2 className="text-2xl font-semibold">Ringkasan Pesanan</h2>
        <div className="mt-8 space-y-2 text-md">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p>Subtotal (3 produk)</p>
              <p>Rp{formatPrice(subtotal)}</p>
            </div>
            <div className="flex justify-between mt-1">
              <p>Biaya Pengiriman</p>
              <p>Rp{formatPrice(shippingFee)}</p>
            </div>
            <div className="flex justify-between mt-1">
              <p>Biaya Layanan</p>
              <p>Rp{formatPrice(serviceFee)}</p>
            </div>
            <div className="flex justify-between mt-1">
              <p>Deposit 25%</p>
              <p>Rp{formatPrice(deposit)}</p>
            </div>
            <div className="flex justify-between mt-1">
              <p>Voucher</p>
              <p>-Rp{formatPrice(discount)}</p>
            </div>
            <div className="flex justify-between mt-1 text-xl font-semibold">
              <p>Total</p>
              <p>Rp{formatPrice(total)}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="w-full bg-primary-400 text-white py-2">Mulai Sewa</button>
    </div>
  );
};

export default OrderSummary;
