const ProductDetails: React.FC = () => {
  return (
    <div className="border-t pt-6 my-5">
      <h2 className="text-2xl font-semibold mb-4">Detail Produk</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Spesifikasi</h3>
          <ul className="text-gray-700 space-y-2">
            <li>Spesifikasi 1</li>
            <li>Spesifikasi 2</li>
            <li>Spesifikasi 3</li>
            <li>Spesifikasi 4</li>
            <li>Spesifikasi 5</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
