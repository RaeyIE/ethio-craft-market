import { Product } from './data';

export interface CartItem extends Product {
  quantity: number;
}

// Redundant but keeping for compatibility if needed
export const useCartStore = () => ({
  items: [],
  removeItem: (id: string) => {},
  updateQuantity: (id: string, q: number) => {},
});