import React from 'react';
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
  return (
    <div className="w-full mx-auto p-6 space-y-6">
      <div className="flex gap-2 mb-14">
        <button className="bg-primary-400 text-white font-bold px-6 py-2 rounded-full">Pick Up</button>
        <button className="bg-white border border-primary-400 px-6 py-2 rounded-full">Delivery</button>
      </div>

      <SellerInfo />

      <div>
        <h2 className="text-2xl px-2 mb-5">Pesanan</h2>
        {stores.map((store, storeIndex) => (
          <div key={storeIndex} className="p-4 border border-gray-300 rounded-xl mb-4">
            <h2 className="text-lg font-semibold mb-2 px-4">{store.name}</h2>
            {store.items.map((item, itemIndex) => (
              <OrderItem key={itemIndex} {...item} />
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <PaymentMethod />
        <OrderSummary stores={stores} />
      </div>
    </div>
  );
};

export default Payment;
