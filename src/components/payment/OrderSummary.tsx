import React from 'react';
import { formatPrice } from '../../utils/formatPrice';
import { useCartSummary } from '../../hooks/useCart';

const OrderSummary: React.FC = () => {
  const { data: summary, isLoading, error } = useCartSummary();

  return (
    <div className="border border-gray-300 rounded-t-none md:rounded-r-lg md:rounded-l-none flex flex-col justify-between w-full">
      <div className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 flex flex-col justify-between">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center md:text-left">Ringkasan Pesanan</h2>

        <div className="mt-6 md:mt-8 space-y-2 md:space-y-3 text-sm md:text-md lg:text-lg">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Subtotal ({summary?.product_count} produk)</p>
              <p>Rp100.000</p>
            </div>
            <div className="flex justify-between">
              <p>Biaya Pengiriman</p>
              <span className="">Rp{formatPrice(summary?.delivery_cost || 0)}</span>
            </div>
            <div className="flex justify-between">
              <p>Biaya Layanan</p>
              <span className="">Rp{formatPrice(summary?.service_cost || 0)}</span>
            </div>
            <div className="flex justify-between">
              <p>Deposit 25%</p>
              <span className="">Rp{formatPrice(summary?.deposite_amount || 0)}</span>
            </div>
            <div className="flex justify-between">
              <p>Voucher</p>
              <span className="">-Rp{formatPrice(summary?.voucher || 0)}</span>
            </div>
            <div className="flex justify-between text-lg md:text-xl font-semibold pt-3 mt-2">
              <p>Total</p>
              <span>Rp{formatPrice(summary?.total_price || 0)}</span>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-primary-400 text-white py-3 md:py-4 text-lg md:text-xl font-semibold">Mulai Sewa</button>
    </div>
  );
};

export default OrderSummary;
