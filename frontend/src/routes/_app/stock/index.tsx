import { useState } from "react";
import "./stock.css";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/stock/")({
  component: RouteComponent,
});

// Parametro opcional. Se não tiver parametro, mostrar todos.

function RouteComponent() {
  const [filter, isFilter] = useState<boolean>(false);

  return (
    <>
      <section className="title">
        <h1>Produtos</h1>
        <p>Gerencie seu estoque</p>
        <button type="button">+ Novo produto</button>
      </section>
      <section className="search-filter">
        <div className="search">
          <input type="text" placeholder="🔍 Digite o nome do produto..." />
          <button type="button" onClick={() => isFilter(!filter)}>
            Filtro
          </button>
        </div>
        {filter && (
          <div className="filter">
            <h1>Filtros Avançados</h1>
            <div className="category-wrap">
              <label htmlFor="category">Categoria</label>
              <select id="category">
                <option value="">Eletrônico</option>
                <option value="">Imóveis</option>
                <option value="">Perecíveis</option>
              </select>
            </div>
            <div className="price-wrap">
              <label htmlFor="price">Preço: R$ 0 - R$ 1000</label>
              <input type="range" id="price" />
            </div>
            <div className="quant-wrap">
              <label htmlFor="quant">Quantidade: 0 - 100</label>
              <input type="range" id="quant" />
            </div>
          </div>
        )}
      </section>
      <div className="prods-title">
        <h1>2 produtos encontrados</h1>
      </div>
      <section className="prods-wrap">
        <article className="product">
          <div className="prod-name">
            <h1>Celular</h1>
            <p>Eletrônico</p>
          </div>
          <div className="prod-price">
            <h2>R$ 1.000,00</h2>
            <p>2 em estoque</p>
          </div>
        </article>
      </section>
    </>
  );
}
