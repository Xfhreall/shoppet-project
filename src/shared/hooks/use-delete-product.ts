import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const deleteProductById = async (id: string) => {
  const response = await axios.delete(`/api/product/delete/${id}`);
  return response.data;
};

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProductById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
}
