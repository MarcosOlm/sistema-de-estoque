import { useState } from "react";
import "./_auth.css";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

  return (
    <>
      <section className="auth">
        <div className="auth-wrap">
          <div className="auth-brand">
            <div className="auth-img">
              <img src="brand-img.svg" alt="brand image" />
            </div>
            <h1>StockFlow</h1>
          </div>
          <Outlet />
          <Link
            to={isLoginMode ? "/sign-up" : "/sign-in"}
            onClick={() => setIsLoginMode(!isLoginMode)}
            className="auth-link"
          >
            {" "}
            {isLoginMode ? "Não tem conta?" : "Já tem uma conta?"}{" "}
          </Link>
        </div>
      </section>
    </>
  );
}
