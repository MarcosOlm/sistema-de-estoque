import "./product.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { authMeStore } from "../../../services/auth.service";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useCreateProduct } from "../../../hooks/useStock";
import type { product } from "../../../types/product";

export const Route = createFileRoute("/_app/stock/newProduct")({
  beforeLoad: async () => {
    try {
      await authMeStore();
    }
    catch {
      throw redirect({to: '/sign-in'});
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm<product>();
  const createProduct = useCreateProduct();
  const handleCreateSubmit: SubmitHandler<product> = (data) => {
    createProduct.mutate(data);
  };
  return (
    <>
      <div className="img-form">
        <div className="img">
          <img src="/create-prod.svg" alt="image-stock" />
        </div>
        <form onSubmit={handleSubmit(handleCreateSubmit)}>
          <div className="form-text">
            <h1>Cadastre seu produto</h1>
          </div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" placeholder="Nome do meu produto..." {...register('name')} />
          <label htmlFor="price">Preço:</label>
          <input type="number" id="price" placeholder="R$ 99,99" {...register('price')} />
          <label htmlFor="quantity">Quantidade:</label>
          <input type="number" id="quantity" placeholder="999 produtos" {...register('quantity')} />
          <label htmlFor="category">Categoria:</label>
          <input type="text" id="category" placeholder="Eletrônico" {...register('category')} />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}
