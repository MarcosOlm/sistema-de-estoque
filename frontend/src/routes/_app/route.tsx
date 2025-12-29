import { useState } from "react";
import "./_app.css";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  const [dashboard, setDashboard] = useState<boolean>(true);

  return (
    <>
      <header>
        <div className="brand">
          <h1>StockFlow</h1>
          <p>Marcos</p>
        </div>
        <nav>
          <Link
            to={dashboard ? "/stock" : "/dashboard"}
            className="navigation"
            onClick={() => setDashboard(!dashboard)}
          >
            {" "}
            {dashboard ? "Produtos" : "Dashboard"}{" "}
          </Link>
          <button type="button">Sair</button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
