import { Bar, Doughnut } from "react-chartjs-2";
import "./dashboard.css";
import { createFileRoute } from "@tanstack/react-router";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

export const Route = createFileRoute("/_app/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="title">
        <h1>Dashboard</h1>
        <p>Visão geral dos seus produtos</p>
      </section>
      <section className="card-wrap">
        <article className="card">
          <h1>Valor Total</h1>
          <h2>R$ 3.000</h2>
          <p>em estoque</p>
          <img src="dollar-sign.svg" alt="" />
        </article>
        <article className="card">
          <h1>Valor Total</h1>
          <h2>R$ 3.000</h2>
          <p>em estoque</p>
          <img src="dollar-sign.svg" alt="" />
        </article>
        <article className="card">
          <h1>Valor Total</h1>
          <h2>R$ 3.000</h2>
          <p>em estoque</p>
          <img src="dollar-sign.svg" alt="" />
        </article>
        <article className="card">
          <h1>Valor Total</h1>
          <h2>R$ 3.000</h2>
          <p>em estoque</p>
          <img src="dollar-sign.svg" alt="" />
        </article>
      </section>
      <section className="graphs-area">
        <article className="graphs-wrap">
          <div className="graph-text">
            <h1>Distribuição por Categoria</h1>
          </div>
          <div className="doughnut">
            <Doughnut
              data={data}
              options={{
                responsive: true, 
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom"
                  }
                }
              }}
            />
          </div>
        </article>
        <article className="graphs-wrap">
          <div className="graph-text">
            <h1>Valor por Categoria</h1>
          </div>
          <div className="bar">
            <Bar
              data={data}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </div>
        </article>
      </section>
      <section className="details-wrap">
        <article className="details">
          <div className="details-text">
            <h1>Alertas de Estoque</h1>
            <span>≤ 10 unidades</span>
          </div>
          <div className="low-stock">
            <h1>celular</h1>
            <p>eletrônicos</p>
            <span>2 un.</span>
          </div>
        </article>
        <article className="details">
          <div className="details-text">
            <h1>Produtos Recentes</h1>
          </div>
          <div className="new-prod">
            <h1>celular</h1>
            <p>eletrônicos</p>
            <span>R$ 1.000,00</span>
          </div>
        </article>
      </section>
    </>
  );
}

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [20, 50, 100],
      backgroundColor: ["rgb(255, 99, 132)"],
      hoverOffset: 5,
    },
  ],
};
