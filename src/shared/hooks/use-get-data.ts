import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
    const response = await axios.get<Product[]>("/api/product");
    return response.data;
};

export function getProducts() {
    return useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 5
    });
}