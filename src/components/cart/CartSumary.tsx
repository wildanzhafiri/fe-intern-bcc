import { IoMdArrowDropdown } from 'react-icons/io';
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';
import { useCartSummary } from '../../hooks/useCart';

const Summary = () => {
  const { data: summary, isLoading, error } = useCartSummary();
  const navigate = useNavigate();

  return (
    <div className="border border-secondary-500 rounded-xl bg-white w-full mx-auto">
      <div className="p-4 md:p-6">
        <h2 className="font-semibold text-lg">Ringkasan Biaya</h2>

        <div className="mt-4 space-y-2">
          {isLoading ? (
            <p className="text-gray-500">Memuat ringkasan...</p>
          ) : error ? (
            <p className="text-red-500">Gagal memuat ringkasan</p>
          ) : (
            <>
              <div className="flex justify-between">
                <span>Jumlah Produk</span>
                <span className="font-medium">{summary?.product_count} Item</span>
              </div>
              <div className="flex justify-between">
                <span>Biaya Pengiriman</span>
                <span className="font-medium">Rp{formatPrice(summary?.delivery_cost || 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Biaya Layanan</span>
                <span className="font-medium">Rp{formatPrice(summary?.service_cost || 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Deposit ({summary?.deposite_percentage}%)</span>
                <span className="font-medium">Rp{formatPrice(summary?.deposite_amount || 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Voucher</span>
                <span className="font-medium">- Rp{formatPrice(summary?.voucher || 0)}</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="border-t p-4 md:p-6">
        <div className="w-full relative">
          <select className="w-full appearance-none border rounded p-2 text-secondary-500">
            <option>Pilih Voucher</option>
          </select>
          <IoMdArrowDropdown className="absolute right-4 top-3 w-5 h-5 text-secondary-500" />
        </div>

        <div className="flex px-1 justify-between font-bold text-md md:text-lg my-3">
          <span>Total Harga</span>
          <span>Rp{formatPrice(summary?.total_price || 0)}</span>
        </div>
      </div>

      <button onClick={() => navigate('/payment')} className="w-full bg-indigo-900 text-white py-3 md:py-4 text-base md:text-lg text-center rounded-b-lg font-medium" disabled={isLoading}>
        {isLoading ? 'Memuat...' : 'Sewa Sekarang'}
      </button>
    </div>
  );
};

export default Summary;
