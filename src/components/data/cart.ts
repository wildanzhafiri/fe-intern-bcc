import { Cart } from '../../types/cart';

import hdcamera from '../../assets/hdcamera.png';
import nintendo from '../../assets/nintendo.svg';
import ps5 from '../../assets/ps5.jpg';

export const cartData: Cart[] = [
  {
    id: 1,
    name: 'High Definition Camera',
    price: 350000,
    image: hdcamera,
    stock: 2,
    checked: false,
    storeId: 1,
    storeName: 'Toko Kamera',
  },
  {
    id: 2,
    name: 'Nintendo Switch',
    price: 200000,
    image: nintendo,
    stock: 2,
    checked: false,
    storeId: 2,
    storeName: 'Toko Game',
  },
  {
    id: 3,
    name: 'PS5',
    price: 200000,
    image: ps5,
    stock: 2,
    checked: false,
    storeId: 2,
    storeName: 'Toko Game',
  },
];
