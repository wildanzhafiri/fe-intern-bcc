import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { TbMessage } from 'react-icons/tb';
import { GoBell } from 'react-icons/go';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white px-6 fixed w-full top-0 z-50">
      <div className="flex justify-between pt-2 mb-3 text-sm text-gray-600">
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-black">
            Download
          </Link>
          <Link to="/" className="hover:text-black">
            Bantuan
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-black">
            Promo
          </Link>
          <Link to="/" className="hover:text-black">
            Daftar Pesanan
          </Link>
          <Link to="/" className="hover:text-black">
            Mulai Berjualan
          </Link>
        </div>
      </div>

      <div className="flex items-center pb-3 border-b">
        <div className="w-40 h-10 bg-gray-700"></div>

        <div className="flex flex-1 mx-4">
          <div className="relative w-full">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input type="text" placeholder="Cari di (nama platform)" className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <MdOutlineShoppingCart className="text-gray-600 hover:text-black text-2xl cursor-pointer" />
          <TbMessage className="text-gray-600 hover:text-black text-2xl cursor-pointer" />
          <GoBell className="text-gray-600 hover:text-black text-2xl cursor-pointer" />
          {/* photo profil */}
          <div className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
