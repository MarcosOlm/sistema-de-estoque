import './_app.css'
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <header>
        <div className="brand">
          <h1>StockFlow</h1>
          <p>Marcos</p>
        </div>
        <nav>
          <Link to="/stock" className='navigation'> Produtos </Link>
          <button type="button">Sair</button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
