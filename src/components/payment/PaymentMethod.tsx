import { Icon } from '@iconify/react';
import React from 'react';
import { GoCreditCard } from 'react-icons/go';
import { IoMdArrowDropdown } from 'react-icons/io';

const PaymentMethod: React.FC = () => {
  return (
    <div className="px-5 py-10 md:px-10 md:py-20 border border-gray-300 rounded-t-lg md:rounded-l-lg md:rounded-r-none flex flex-col justify-center w-full">
      <div className="relative w-full flex flex-col gap-6">
        <label className="text-lg md:text-xl lg:text-2xl">Metode Pembayaran</label>

        <div className="relative w-full md:hidden">
          <select className="text-base py-4 w-full border rounded-lg px-12 appearance-none truncate min-w-[200px]">
            <option>Transfer Bank/Tagihan</option>
            <option>Kartu Kredit</option>
            <option>e-Wallet</option>
          </select>
          <GoCreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
          <IoMdArrowDropdown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
        </div>

        <div className="relative w-full hidden md:block lg:hidden">
          <select className="text-lg py-5 w-full border rounded-lg px-14 appearance-none truncate min-w-[250px]">
            <option>Transfer Bank/Tagihan</option>
            <option>Kartu Kredit</option>
            <option>e-Wallet</option>
          </select>
          <GoCreditCard className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-600" />
          <IoMdArrowDropdown className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-600" />
        </div>

        <div className="relative w-full hidden lg:block">
          <select className="text-xl py-6 w-full border rounded-lg px-20 appearance-none truncate min-w-[300px]">
            <option>Transfer Bank/Tagihan</option>
            <option>Kartu Kredit</option>
            <option>e-Wallet</option>
          </select>
          <GoCreditCard className="absolute left-7 top-1/2 transform -translate-y-1/2 w-7 h-7 text-gray-600" />
          <IoMdArrowDropdown className="absolute right-7 top-1/2 transform -translate-y-1/2 w-7 h-7 text-gray-600" />
        </div>

        <label className="text-lg md:text-xl lg:text-2xl">Syarat dan Ketentuan</label>

        <div className="relative w-full md:hidden">
          <select className="text-base py-4 w-full border rounded-lg px-12 appearance-none truncate min-w-[200px]">
            <option>Syarat dan Ketentuan</option>
          </select>
          <Icon icon="clarity:warning-line" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-600" />
          <IoMdArrowDropdown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
        </div>

        <div className="relative w-full hidden md:block lg:hidden">
          <select className="text-lg py-5 w-full border rounded-lg px-14 appearance-none truncate min-w-[250px]">
            <option>Syarat dan Ketentuan</option>
          </select>
          <Icon icon="clarity:warning-line" className="absolute left-5 top-1/2 transform -translate-y-1/2 w-7 h-7 text-gray-600" />
          <IoMdArrowDropdown className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-600" />
        </div>

        <div className="relative w-full hidden lg:block">
          <select className="text-xl py-6 w-full border rounded-lg px-20 appearance-none truncate min-w-[300px]">
            <option>Syarat dan Ketentuan</option>
          </select>
          <Icon icon="clarity:warning-line" className="absolute left-7 top-1/2 transform -translate-y-1/2 w-9 h-9 text-gray-600" />
          <IoMdArrowDropdown className="absolute right-7 top-1/2 transform -translate-y-1/2 w-7 h-7 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
