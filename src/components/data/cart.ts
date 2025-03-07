import { Cart } from '../../types/cart';

export const cartData: Cart[] = [
  {
    id: 1,
    name: 'High Definition Camera',
    price: 350000,
    image: '/src/assets/hdcamera.png',
    stock: 2,
    checked: false,
    storeId: 1,
    storeName: 'Toko Kamera',
  },
  {
    id: 2,
    name: 'Nintendo Switch',
    price: 200000,
    image: '/src/assets/nintendo.svg',
    stock: 2,
    checked: false,
    storeId: 2,
    storeName: 'Toko Game',
  },
  {
    id: 3,
    name: 'PS5',
    price: 200000,
    image: '/src/assets/nintendo.svg',
    stock: 2,
    checked: false,
    storeId: 2,
    storeName: 'Toko Game',
  },
];
