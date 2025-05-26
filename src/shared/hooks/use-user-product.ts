import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image_url: string;
  createdAt: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>('/api/product/user');
  return response.data;
};

export function getUserProducts() {
  return useQuery<Product[]>({
    queryKey: ['user-products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
}
