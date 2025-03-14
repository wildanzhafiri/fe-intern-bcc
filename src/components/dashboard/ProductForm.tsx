import { useState, ChangeEvent } from 'react';
import { FaCamera } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import Button from '../ui/Button';

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    description: '',
    stock: 1,
    prices: {
      '1 Hari': '',
      '3 Hari': '',
      '5 Hari': '',
      '7 Hari': '',
    } as Record<string, string>,
    specifications: [
      { key: 'Lebar', value: '± 200–250 cm' },
      { key: 'Tinggi', value: '± 120–150 cm' },
      { key: 'Diameter', value: '± 200–250 cm' },
      { key: 'Bahan', value: 'Polyester' },
    ],
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProduct((prev) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceChange = (key: string, value: string) => {
    setProduct((prev) => ({
      ...prev,
      prices: { ...prev.prices, [key]: value },
    }));
  };

  const [count, setCount] = useState<number>(1);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="bg-[#ECECEC] p-4 md:p-6 lg:p-8 rounded-lg w-full mx-auto">
        <div className="p-4 md:p-6 rounded-lg">
          <p className="mb-2">Gambar Produk (0/8)</p>
          <label className="flex flex-col items-center justify-center w-full md:w-full lg:w-64 h-40 border border-gray-300 rounded-lg cursor-pointer bg-white">
            <input type="file" accept="image/*" multiple className="hidden" />
            <FaCamera className="text-gray-400 text-4xl w-16 h-16" />
          </label>

          <label className="block text-black font-semibold mt-4 mb-2">Nama Produk</label>
          <input type="text" name="name" value={product.name} onChange={handleInputChange} className="w-full bg-white border p-2 rounded-md mb-4" />

          <div className="flex flex-col md:flex-col lg:flex-row md:items-center md:space-x-4">
            <div className="w-full">
              <label className="block text-black font-semibold mb-2">Kategori</label>
              <select name="category" value={product.category} onChange={handleSelectChange} className="w-full bg-white border p-2 rounded-md mb-4">
                <option value="">Pilih</option>
                <option value="electronics">Alat Elektronik</option>
                <option value="tools">Perkakas</option>
                <option value="hobby">Hobi</option>
                <option value="events">Acara</option>
                <option value="vacations">Liburan</option>
              </select>
            </div>
          </div>

          <label className="block text-black font-semibold mb-2">Deskripsi Produk</label>
          <textarea name="description" value={product.description} onChange={handleInputChange} className="w-full bg-white border p-2 rounded-md mb-4 h-24" />
        </div>

        <div className="border-1 border-black mx-6"></div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-6 p-4 md:p-6">
          <div className="w-full">
            <label className="block text-black font-semibold mb-2">Stok</label>
            <div className="flex w-full md:w-full lg:w-44 items-center py-1 bg-white border border-black rounded-lg overflow-hidden mt-2">
              <button onClick={() => count > 1 && setCount(count - 1)} className={`w-[30%] h-8 flex justify-center items-center border-r ${count === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={count === 1}>
                <FaMinus />
              </button>

              <div className="w-[40%] h-8 flex justify-center items-center text-lg font-semibold mb-2">{count}</div>

              <button onClick={() => setCount(count + 1)} className={`w-[30%] h-8 flex justify-center items-center border-l`}>
                <FaPlus />
              </button>
            </div>

            <label className="block text-black text-xl my-4">Variasi Harga Sewa</label>
            {Object.keys(product.prices).map((key) => (
              <div key={key} className="flex flex-col md:flex-col lg:flex-row md:items-center space-y-2 md:space-y-2 lg:space-y-0 lg:space-x-2 mb-2">
                <span className="w-full lg:w-16">{key}</span>
                <input type="text" value={product.prices[key]} onChange={(e) => handlePriceChange(key, e.target.value)} className="w-full lg:w-1/2 bg-white border p-2 rounded-md" />
              </div>
            ))}
          </div>

          <div className="max-w-3xs">
            <h3 className="text-black font-semibold mb-2">Spesifikasi</h3>
            <div className="border bg-white border-secondary-400 p-4 rounded-lg w-full">
              <table className="max-w-2xl text-black font-semibold">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className="align-top">
                      <td className="pr-2">{spec.key}</td>
                      <td className="w-4">:</td>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="text-blue-500 mt-2 block">Tambah +</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-center lg:justify-end mt-6">
        <Button text="Tambah Produk" variant="addProduct" />
      </div>
    </div>
  );
};

export default ProductForm;
