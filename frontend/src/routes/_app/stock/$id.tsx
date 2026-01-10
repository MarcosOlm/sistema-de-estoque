import "./product.css";
import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";
import { authMeStore } from "../../../services/auth.service";
import { useProductById, useUpdateProduct } from "../../../hooks/useStock";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { product } from "../../../types/product";

export const Route = createFileRoute("/_app/stock/$id")({
  beforeLoad: async () => {
    try {
      await authMeStore();
    } catch {
      throw redirect({ to: "/sign-in" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { data, isError, isPending } = useQuery(useProductById(Number(id)));
  if (isError) {
    return <Navigate to="/" />
  }
  if (isPending) {
    return <p>Carregando...</p>
  }
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
  });
  useEffect(() => {
    if (data) {
      setForm({
        name: data?.result.name,
        price: String(data?.result.price),
        quantity: String(data?.result.quantity),
        category: data?.result.category,
      });
    }
  }, [data]);
  const { register, handleSubmit, formState: { errors } } = useForm<product>();
  const updateProduct = useUpdateProduct();
  const handleUpdateSubmit: SubmitHandler<product> = (dataForm) => {
    dataForm.idProduct = Number(id);
    updateProduct.mutate(dataForm);
  }

  return (
    <>
      <div className="img-form">
        <div className="img">
          <img src="/update-prod.svg" alt="image-stock" />
        </div>
        <form onSubmit={handleSubmit(handleUpdateSubmit)}>
          <div className="form-text">
            <h1>Edite seu produto</h1>
          </div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Nome do meu produto..."
            defaultValue={form.name}
            {...register('name')}
          />
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            placeholder="R$ 99,99"
            defaultValue={form.price}
            {...register('price')}
          />
          <label htmlFor="quantity">Quantidade:</label>
          <input
            type="number"
            id="quantity"
            placeholder="999 produtos"
            defaultValue={form.quantity}
            {...register('quantity')}
          />
          <label htmlFor="category">Categoria:</label>
          <input
            type="text"
            id="category"
            placeholder="Eletrônico"
            defaultValue={form.category}
            {...register('category')}
          />
          <button type="submit">Editar</button>
        </form>
      </div>
    </>
  );
}
