import { queryOptions } from "@tanstack/react-query";
import { getAllProduct, getProductById } from "../services/product.service";

export function useAllProduct() {
    return queryOptions({
        queryKey: ['products'],
        queryFn: getAllProduct,
    })
}

export function useProductById(id: number) {
    return queryOptions({
        queryKey: ['product', id],
        queryFn: () => getProductById(id),
    })
}