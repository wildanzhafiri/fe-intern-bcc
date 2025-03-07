import { createContext, useContext, useState, ReactNode } from 'react';
import { Cart } from '../types/cart';
import { cartData } from '../components/data/cart';

interface CartContextType {
  cartItems: Cart[];
  updateCartItem: (id: number, checked: boolean) => void;
  updateCartByStore: (storeId: number, checked: boolean) => void;

  isStoreChecked: (storeId: number) => boolean;
  isItemChecked: (id: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Cart[]>(cartData);

  const updateCartItem = (id: number, checked: boolean) => {
    setCartItems((prev) => {
      const updatedCart = prev.map((item) => (item.id === id ? { ...item, checked } : item));

      const itemUpdated = updatedCart.find((item) => item.id === id);
      if (itemUpdated) {
        const allItemsInStore = updatedCart.filter((item) => item.storeId === itemUpdated.storeId);
        const isStoreChecked = allItemsInStore.every((item) => item.checked);

        return updatedCart.map((item) => (item.storeId === itemUpdated.storeId ? { ...item, storeChecked: isStoreChecked } : item));
      }

      return updatedCart;
    });
  };

  const updateCartByStore = (storeId: number, checked: boolean) => {
    setCartItems((prev) => prev.map((item) => (item.storeId === storeId ? { ...item, checked } : item)));
  };

  const isStoreChecked = (storeId: number) => {
    const itemsInStore = cartItems.filter((item) => item.storeId === storeId);
    return itemsInStore.length > 0 && itemsInStore.every((item) => item.checked);
  };

  const isItemChecked = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.checked : false;
  };

  return <CartContext.Provider value={{ cartItems, updateCartItem, updateCartByStore, isStoreChecked, isItemChecked }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
