import { api } from "../api/api";
import type { allProductResponse, defaultResponse, product, productResponse } from "../types/product";

export const getAllProduct = async (): Promise<allProductResponse> => {
    return (await api.get('/product')).data;
}

export const getProductById = async (id: number): Promise<productResponse> => {
    return (await api.get(`/product/${id}`)).data;
}

export const createProduct = async (data: product): Promise<productResponse> => {
    return (await api.post('/product', data)).data;
}

export const updateProduct = async (data: product): Promise<defaultResponse> => {
    return (await api.put('/product', data)).data;
}

export const deleteProduct = async (): Promise<defaultResponse> => {
    return (await api.delete('/product')).data;
}