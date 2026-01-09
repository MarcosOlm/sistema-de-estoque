import { api } from "../api/api";
import type { allProductResponse, product } from "../types/product";

export const getAllProduct = async (): Promise<allProductResponse> => {
    return (await api.get('/product')).data;
}

export const getProductById = async (id: number): Promise<product> => {
    return (await api.get(`/product/${id}`)).data;
}