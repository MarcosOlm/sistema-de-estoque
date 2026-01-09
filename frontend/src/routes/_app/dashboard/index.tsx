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
import { useQuery } from "@tanstack/react-query";
import { useDashboard } from "../../../hooks/useDashboard";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export const Route = createFileRoute("/_app/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isPending } = useQuery(useDashboard());
  const chartDataDoughnut = {
    labels: data?.graphQuery.map((item) => item.category),
    datasets: [
      {
        label: "My First Dataset",
        data: data?.graphQuery.map((item) => item.sizeByCategory),
        backgroundColor: [
          "#2563eb", // azul
          "#16a34a", // verde
          "#f59e0b", // amarelo
          "#dc2626", // vermelho
          "#7c3aed", // roxo
          "#0ea5e9", // ciano
          "#64748b", // cinza
          "#ea580c", // laranja
        ],
        hoverOffset: 5,
      },
    ],
  };
  const chartDataBar = {
    labels: data?.graphQuery.map((item) => item.category),
    datasets: [
      {
        label: "My First Dataset",
        data: data?.graphQuery.map((item) => item.amountCategory),
        backgroundColor: [
          "#2563eb", // azul
          "#16a34a", // verde
          "#f59e0b", // amarelo
          "#dc2626", // vermelho
          "#7c3aed", // roxo
          "#0ea5e9", // ciano
          "#64748b", // cinza
          "#ea580c", // laranja
        ],
        hoverOffset: 5,
      },
    ],
  };

  if (isPending) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <section className="title">
        <h1>Dashboard</h1>
        <p>Visão geral dos seus produtos</p>
      </section>
      <section className="card-wrap">
        <article className="card">
          <h1>Produtos</h1>
          <h2> {data?.cardQuery.quantityProducts ?? 0} </h2>
          <p>cadastrados</p>
          <img src="dollar-sign.svg" alt="" />
        </article>
        <article className="card">
          <h1>Categorias</h1>
          <h2> {data?.cardQuery.quantityCategory ?? 0} </h2>
          <p>ativas</p>
          <img src="dollar-sign.svg" alt="" />
        </article>
        <article className="card">
          <h1>Valor Total</h1>
          <h2>R$ {data?.cardQuery.amountPrice ?? 0} </h2>
          <p>em estoque</p>
          <img src="dollar-sign.svg" alt="" />
        </article>
        <article className="card">
          <h1>Preço Médio</h1>
          <h2>R$ {data?.cardQuery.averagePrice ?? 0} </h2>
          <p>por produto</p>
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
              data={chartDataDoughnut}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                  },
                },
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
              data={chartDataBar}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
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
          {data?.noStockAlertQuery.length === 0 ? (
            <p>não tem produtos faltando</p>
          ) : (
            data?.noStockAlertQuery.map((item) => (
              <div className="low-stock">
                <h1> {item.name} </h1>
                <p> {item.category} </p>
                <span>{item.quantity} un.</span>
              </div>
            ))
          )}
        </article>
        <article className="details">
          <div className="details-text">
            <h1>Produtos Recentes</h1>
          </div>
          {data?.newProductsQuery.length === 0 ? (
            <p>não tem novos produtos no momento</p>
          ) : (
            data?.newProductsQuery.map((item) => (
              <div className="new-prod">
                <h1> {item.name} </h1>
                <p> {item.category} </p>
                <span>R$ {item.price} </span>
              </div>
            ))
          )}
        </article>
      </section>
    </>
  );
}
