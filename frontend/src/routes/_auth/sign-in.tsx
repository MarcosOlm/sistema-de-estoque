import "./sign.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createFileRoute } from "@tanstack/react-router";
import type { Store } from "../../types/store";
import { useLoginAuth } from "../../hooks/useAuth";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  const { register, handleSubmit } = useForm<Store>();
  const loginStore = useLoginAuth();
  const handleLoginSubmit: SubmitHandler<Store> = (data) => {
    loginStore.mutate(data);
  };

  return (
    <>
      <div className="form-text">
        <h1>Entre na sua conta</h1>
        <p>Gerencie seus produtos com facilidade</p>
      </div>
      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="seu@email.com"
          {...register("email")}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          {...register("password")}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
