import { useParams } from 'react-router-dom';
import { useProductSpecifications } from '../../hooks/useProduct';
import { Product } from '../../types/product';

interface ProductInfoProps {
  product: Product;
}

const ProductDetails: React.FC<ProductInfoProps> = ({ product }) => {
  const { id } = useParams<{ id: string }>();
  const { data: specifications } = useProductSpecifications(id!);

  return (
    <div className="border-t pt-6 my-5">
      <h2 className="text-2xl font-semibold mb-4">Detail Produk</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-gray-300 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Spesifikasi</h3>
          {specifications && specifications.length > 0 ? (
            <ul className="text-[#383838] space-y-2">
              {specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          ) : (
            <p className="text-[#383838]">Tidak ada spesifikasi tersedia.</p>
          )}
        </div>

        <div className="md:col-span-2">
          <p className="text-[#383838]">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
