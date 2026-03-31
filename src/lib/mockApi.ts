import { products } from './data';

export const mockApi = {
  getProducts: async () => {
    return products;
  },
  getProduct: async (id: string) => {
    return products.find(p => p.id === id);
  },
  getFeaturedProducts: async () => {
    return products.slice(0, 3);
  },
  getCategories: async () => {
    return [];
  },
  createOrder: async (orderData: any) => {
    return { success: true, orderId: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase() };
  }
};