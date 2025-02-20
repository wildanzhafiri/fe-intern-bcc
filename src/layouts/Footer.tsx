import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-xs">
      <div className="h-8 bg-gray-400"></div>

      <div className="container mx-auto py-12 px-10 grid grid-cols-4">
        <div className="flex flex-col items-center">
          <div className="w-32 h-10 bg-gray-700 mb-2"></div>
          <p className="text-gray-600">your business slogan</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">(Nama platform)</h3>
          <ul className="space-y-1">
            <li>Tentang Kami</li>
            <li>Blog</li>
            <li>Promo</li>
            <li>Metode Pembayaran</li>
            <li>Lacak Pesanan</li>
            <li>Pengembalian Barang</li>
            <li>Garansi</li>
            <li>Mulai Jual</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Layanan</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Pusat Bantuan</li>
            <li>Kontak Media</li>
            <li>Kebijakan dan Privasi</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
