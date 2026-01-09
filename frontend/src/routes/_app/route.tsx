import "./_app.css";
import { useState } from "react";
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { authLogoutStore, authMeStore } from "../../services/auth.service";

export const Route = createFileRoute("/_app")({
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
  const [dashboard, setDashboard] = useState<boolean>(true);
  const navegate = useNavigate();

  return (
    <>
      <header>
        <div className="hearder-brand">
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
          <button
            type="button"
            onClick={() => {
              authLogoutStore();
              navegate({to: '/sign-in'});
            }}
          >
            Sair
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
