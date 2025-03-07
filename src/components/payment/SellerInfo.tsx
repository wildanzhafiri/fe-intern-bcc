import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

const SellerInfo: React.FC = () => {
  return (
    <div className="mb-14">
      <h2 className="my-6 px-2 text-2xl">Alamat Penjual</h2>
      <div className="px-10 py-3 border border-gray-300 rounded-lg flex items-center justify-between">
        <div className="max-w-5xl">
          <h2 className="text-lg font-semibold">Nama Toko (+62 812 1234 5678)</h2>
          <p className="text-md text-black">Perumahan Griya Harmoni Sejahtera, Blok A1 No. 10, Jl. Anggrek Indah, RT 05 RW 06, Kelurahan Sukamaju, Kecamatan Makmur Jaya, Kota Sentosa, Provinsi Jawa Barat, 40123</p>
          <span className="text-sm text-gray-400">3 km</span>
        </div>

        <div>
          <RiArrowRightSLine className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
