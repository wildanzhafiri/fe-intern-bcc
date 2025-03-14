import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

interface SellerInfoProps {
  isDelivery: boolean;
}

const SellerInfo: React.FC<SellerInfoProps> = ({ isDelivery }) => {
  return (
    <div className="mb-10 md:mb-14">
      <h2 className="my-4 md:my-6 px-2 text-xl md:text-2xl">{isDelivery ? 'Alamat Penyewa' : 'Alamat Penjual'}</h2>

      <div className="px-4 py-3 md:px-8 md:py-4 border border-gray-300 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
        <div className="w-full md:w-[85%]">
          {isDelivery ? (
            <>
              <h2 className="text-md md:text-lg font-semibold">Taman Indah Lestari (+62 812 1234 5678)</h2>
              <p className="text-sm md:text-md text-black leading-tight md:leading-normal">
                Perumahan Griya Harmoni Sejahtera, Blok A1 No. 10, Jl. Anggrek Indah, RT 05 RW 06, Kelurahan Sukamaju, Kecamatan Makmur Jaya, Kota Sentosa, Provinsi Jawa Barat, 40123
              </p>
            </>
          ) : (
            <>
              <h2 className="text-md md:text-lg font-semibold">Nama Toko (+62 812 1234 5678)</h2>
              <p className="text-sm md:text-md text-black leading-tight md:leading-normal">
                Perumahan Griya Harmoni Sejahtera, Blok B2 No. 15, Jl. Melati Indah, RT 03 RW 05, Kelurahan Damai, Kecamatan Sejahtera, Kota Bahagia, Provinsi Jawa Barat, 40234
              </p>
            </>
          )}
          <span className="text-xs md:text-sm text-gray-400">3 km</span>
        </div>

        <div className="self-end md:self-center">
          <RiArrowRightSLine className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
