import React from 'react';
import { GoCreditCard } from 'react-icons/go';
import { IoMdArrowDropdown } from 'react-icons/io';

const PaymentMethod: React.FC = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg md:rounded-l-lg md:border-r-0 flex flex-col">
      <h2 className="text-lg font-semibold">Metode Pembayaran</h2>
      <div className="relative w-full">
        <select className="mt-2 p-2 w-full border rounded px-12 appearance-none">
          <option>Transfer Bank/Tagihan</option>
          <option>Kartu Kredit</option>
          <option>e-Wallet</option>
        </select>
        <GoCreditCard className="absolute left-5 bottom-2.5 w-5 h-5 pointer-events-none text-gray-600" />
        <IoMdArrowDropdown className="absolute right-5 bottom-2.5 w-5 h-5 pointer-events-none text-gray-600" />
      </div>
    </div>
  );
};

export default PaymentMethod;
