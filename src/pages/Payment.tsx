import React, { useState } from 'react';
import SellerInfo from '../components/payment/SellerInfo';
import OrderItem from '../components/payment/OrderItem';
import PaymentMethod from '../components/payment/PaymentMethod';
import OrderSummary from '../components/payment/OrderSummary';

const stores = [
  {
    name: 'Toko Rental Jaya',
    items: [
      { name: 'Kamera DSLR', price: 150000, quantity: 1, duration: 3, imageUrl: '/src/assets/kameradslr.png' },
      { name: 'Gitar Akustik', price: 80000, quantity: 1, duration: 5, imageUrl: '/src/assets/gitar.png' },
      { name: 'Bola Basket', price: 10000, quantity: 1, duration: 7, imageUrl: '/src/assets/bolabasket.png' },
    ],
  },
];

const Payment: React.FC = () => {
  const [isDelivery, setIsDelivery] = useState(false);
  return (
    <div className="w-full mx-auto p-6 space-y-6">
      <div className="flex gap-2 mb-14">
        <button onClick={() => setIsDelivery(false)} className={`px-6 py-2 rounded-full font-bold ${!isDelivery ? 'bg-primary-400 text-white' : 'bg-white border border-primary-400 text-primary-400'}`}>
          Pick Up
        </button>
        <button onClick={() => setIsDelivery(true)} className={`px-6 py-2 rounded-full font-bold ${isDelivery ? 'bg-primary-400 text-white' : 'bg-white border border-primary-400 text-primary-400'}`}>
          Delivery
        </button>
      </div>

      <SellerInfo isDelivery={isDelivery} />

      <div>
        <h2 className="text-2xl px-2 mb-5">Pesanan</h2>
        {stores.map((store, storeIndex) => (
          <div key={storeIndex} className="md:p-4 border border-gray-300 rounded-xl mb-4">
            <h2 className="text-lg bg-primary-400 py-2 text-white md:text-black md:bg-transparent font-semibold mb-2 px-4">{store.name}</h2>
            {store.items.map((item, itemIndex) => (
              <OrderItem key={itemIndex} {...item} />
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <PaymentMethod />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Payment;
