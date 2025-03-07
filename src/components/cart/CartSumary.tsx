import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/formatPrice';

const Summary = () => {
  const { cartItems } = useCart();
  const selectedItems = cartItems.filter((item) => item.checked);
  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="border rounded-xl bg-white w-full max-w-sm mx-auto">
      <div className="p-6">
        <h2 className="font-semibold text-lg">Ringkasan Biaya</h2>
        <div className="mt-6 space-y-2">
          {selectedItems.length > 0 ? (
            selectedItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span className="font-medium">1 x Rp{item.price.toLocaleString()}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Tidak ada item yang dipilih</p>
          )}
        </div>
      </div>

      <div className="border-t p-4">
        <select className="w-full border rounded p-2 text-gray-700">
          <option>Pilih Voucher</option>
        </select>

        <div className="flex justify-between font-bold text-lg my-3">
          <span>Total Harga</span>
          <span>Rp{formatPrice(totalPrice)}</span>
        </div>
      </div>

      <button className="w-full bg-indigo-900 text-white py-3 text-center rounded-b-lg">Sewa Sekarang</button>
    </div>
  );
};

export default Summary;
