import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type dataProps = {
    title: string;
    description: string;
    price: string;
    image_url: string;
    category: string;
};

const postData = async (data: dataProps) => {
    const response = await axios.post("/api/product/create", data);
    return response.data;
};

export function useCreateProduct() {
    return useMutation({
        mutationFn: postData,
    });
}