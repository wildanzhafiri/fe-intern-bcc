import { FaStar } from 'react-icons/fa';

const reviews = [
  { id: 1, name: 'Budi Santoso', rating: 5, comment: 'Produk sangat bagus! Kualitasnya sesuai dengan deskripsi.' },
  { id: 2, name: 'Siti Aisyah', rating: 4, comment: 'Barang sesuai dengan gambar, pengiriman juga cepat.' },
  { id: 3, name: 'Rizky Pratama', rating: 3, comment: 'Cukup baik, namun ada sedikit kekurangan di bagian pengemasan.' },
];

const ReviewProduct: React.FC = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Ulasan</h2>

      <div className="bg-gray-100 p-6 rounded-lg">
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <div className="flex items-center text-yellow-500 mb-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index} className={index < review.rating ? '' : 'text-gray-300'} />
                  ))}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Belum ada ulasan.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewProduct;
