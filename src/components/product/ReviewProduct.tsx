import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'm****q',
    rating: 5,
    comment:
      'Barang mendarat dengan selamat. Tidak ada yang minus pada produk. Dikirim sesuai pesanan. Pemilik sangat ramah dan sangat gercep dalam pengiriman. Untuk kualitas sesuai dengan harga. Untuk packing nya sangat aman. Kurir juga oke tepat waktu. Sempat takut sih barang nggak nyampe karena pengalaman sebelumnya memakai jasa kirim yang mereka kirim, tapi kali ini oke lah. Best 👍🏻.',
    profilePicture: 'https://images.unsplash.com/photo-1667132970685-a2109a3ed00d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1631500042068-71e4e797277f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1555703484-89d93b41e658?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1666211586051-8448a043a977?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1680742509004-947beafe9579?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    date: '1 Januari 2025',
  },
  {
    id: 2,
    name: 'g*****q',
    rating: 5,
    comment:
      'Pengemasan rapi, produk baik sesuai dengan harga. Produknya simple, tidak perlu repot untuk merakit tenda, tinggal buka lipatan dan bisa langsung digunakan. Ada tas, jadi bisa dibawa kemana-mana. Outdoor dan indoor, bisa banget. Makasih, jasa pengiriman juga sesuai dan tepat waktu.',
    profilePicture: 'https://images.unsplash.com/photo-1565028387289-0beb1187675a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://plus.unsplash.com/premium_photo-1682136203392-780c7790b3f0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1681152384968-8939753a9068?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    date: '18 Maret 2025',
  },
];

const ReviewProduct: React.FC = () => {
  return (
    <div className="mb-10 w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-2">Ulasan</h2>
      <div className="space-y-8">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="flex gap-4 bg-white p-6 rounded-lg">
              <img src={review.profilePicture} alt={review.name} className="w-12 md:w-16 h-12 md:h-16 rounded-full object-cover" />

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">{review.name}</h3>
                  <span className="text-md text-gray-500">{review.date}</span>
                </div>

                <div className="flex items-center text-primary-400 my-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index} className={index < review.rating ? '' : 'text-gray-300'} />
                  ))}
                </div>

                <p className="text-gray-600 my-10 leading-relaxed max-w-3xl text-justify">{review.comment}</p>

                {review.images.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {review.images.map((img, index) => (
                      <img key={index} src={img} alt="Review" className="w-20 h-20 object-cover" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Belum ada ulasan.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewProduct;
