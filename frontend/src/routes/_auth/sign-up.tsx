import { createFileRoute } from "@tanstack/react-router";
import { useRegistrateAuth } from "../../hooks/useAuth";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { Store } from "../../types/store";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Store>();
  const createStore = useRegistrateAuth();
  const handleCreateSubmit: SubmitHandler<Store> = (data) => {
    createStore.mutate(data);
  };

  return (
    <>
      <div className="form-text">
        <h1>Cadastre sua loja</h1>
        <p>Crie uma conta para começar</p>
      </div>
      <form onSubmit={handleSubmit(handleCreateSubmit)}>
        <label htmlFor="name">Nome:</label>
        <input
          type="name"
          id="name"
          placeholder="Minha Loja"
          {...register("name", {
            required: "O nome é obrigatório!",
            validate: (value?: string) => {
              if (!value) return true;
              if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value)) {
                return "O nome só pode conter letras!";
              }
              return true;
            },
          })}
        />
        {errors.name && <p style={{ color: "red" }}> {errors.name.message} </p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="seu@email.com"
          {...register("email", {
            required: "O email é obrigatório!",
          })}
        />
        {errors.email && (
          <p style={{ color: "red" }}> {errors.email.message} </p>
        )}
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          {...register("password", {
            required: "A senha é obrigatária!",
            minLength: {
              value: 5,
              message: "É necessário no minimo 5 caracteres!",
            },
            validate: {
              hasUppercase: (v) =>
                /[A-Z]/.test(v) || "A senha deve conter letra maiúscula",
              hasLowercase: (v) =>
                /[a-z]/.test(v) || "A senha deve conter letra minúscula",
              hasSpecialChar: (v) =>
                /[@$!%*?&]/.test(v) || "A senha deve conter: @$!%*?&",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}> {errors.password.message} </p>
        )}
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
