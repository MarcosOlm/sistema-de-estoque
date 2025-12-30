import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="form-text">
        <h1>Cadastre sua loja</h1>
        <p>Crie uma conta para começar</p>
      </div>
      <form>
        <label htmlFor="name">Nome:</label>
        <input type="name" id="name" placeholder="Minha Loja" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="seu@email.com" />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="********" />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
