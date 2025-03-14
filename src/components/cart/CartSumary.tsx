import { IoMdArrowDropdown } from 'react-icons/io';
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';
import { useCartSummary } from '../../hooks/useCart';

const Summary = () => {
  const { data: summary, isLoading, error } = useCartSummary();
  const navigate = useNavigate();

  return (
    <div className="border border-secondary-500 rounded-xl bg-white w-full mx-auto">
      <div className="p-4 md:p-8">
        <h2 className="font-semibold text-lg">Ringkasan Biaya</h2>

        <div className="mt-4 space-y-2">
          {isLoading ? (
            <p className="text-gray-500">Memuat ringkasan...</p>
          ) : error ? (
            <p className="text-red-500">Gagal memuat ringkasan</p>
          ) : (
            <>
              {summary?.payload.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.name || `Produk ${index + 1}`}</span>
                  <span className="font-medium">
                    {item.count} x Rp{formatPrice(item.price)}
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <div className="border-t p-4 md:p-6">
        <div className="w-full relative">
          <select className="w-full appearance-none border rounded-lg p-2 text-secondary-500">
            <option>Pilih Voucher</option>
          </select>
          <IoMdArrowDropdown className="absolute right-4 top-3 w-5 h-5 text-secondary-500" />
        </div>

        <div className="flex px-1 justify-between font-bold text-md md:text-lg my-3">
          <span>Total Harga</span>
          <span>Rp{formatPrice(summary?.totalPrice ?? 0)}</span>
        </div>
      </div>

      <button onClick={() => navigate('/payment')} className="w-full bg-indigo-900 text-white py-3 md:py-4 text-base md:text-lg text-center rounded-b-lg font-medium" disabled={isLoading}>
        {isLoading ? 'Memuat...' : 'Sewa Sekarang'}
      </button>
    </div>
  );
};

export default Summary;
