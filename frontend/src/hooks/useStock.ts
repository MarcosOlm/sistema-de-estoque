import { queryOptions, useMutation } from "@tanstack/react-query";
import {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../services/product.service";
import type { product } from "../types/product";
import { useNavigate } from "@tanstack/react-router";

export function useAllProduct() {
  return queryOptions({
    queryKey: ["products"],
    queryFn: getAllProduct,
    retry: 1,
  });
}

export function useProductById(id: number) {
  return queryOptions({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
}

export function useCreateProduct() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: product) => createProduct(data),
    onSuccess: () => {
      navigate({ to: "/" });
    },
  });
}

export function useUpdateProduct() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: product) => updateProduct(data),
    onSuccess: () => {
      navigate({ to: "/dashboard" });
    },
  });
}
