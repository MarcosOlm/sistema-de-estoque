import "./stock.css";
import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useAllProduct } from "../../../hooks/useStock";

export const Route = createFileRoute("/_app/stock/")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      query: search.query as string,
      category: search.category as string,
      price: search.price,
      quantity: search.quantity,
    };
  },
  component: RouteComponent,
});

// Parametro opcional. Se não tiver parametro, mostrar todos.

function RouteComponent() {
  const { query, category, price, quantity } = Route.useSearch();
  const [filter, isFilter] = useState<boolean>(false);
  const navegate = useNavigate({ from: Route.fullPath });
  const { data, isLoading } = useQuery(useAllProduct());
  if (isLoading) {
    return <p>Carregando...</p>;
  }
  let lagerPrice = 0;
  let lagerQuantity = 0;
  const products = data?.result
    .filter((prod, index) => {
      if (index == 1) {
        lagerPrice = prod.price
        lagerQuantity = prod.quantity
      }
      else {
        if (prod.price > lagerPrice) {
          lagerPrice = prod.price
        }
        if (prod.quantity > lagerQuantity) {
          lagerQuantity = prod.quantity
        }
      }
      if (query && prod.name.startsWith(query)) {
        return prod;
      }
      if (!query) {
        return prod;
      }
    })
    .filter((prod) => {
      if (category && prod.category === category) {
        return prod;
      }
      if (!category) {
        return prod;
      }
    })
    .filter((prod) => {
      if (price && prod.price <= Number(price)) {
        return prod;
      }
      if (!price) {
        return prod;
      }
    })
    .filter((prod) => {
      if (quantity && prod.quantity <= Number(quantity)) {
        return prod;
      }
      if (!quantity) {
        return prod;
      }
    });

  return (
    <>
      <section className="title">
        <h1>Produtos</h1>
        <p>Gerencie seu estoque</p>
        <button type="button">+ Novo produto</button>
      </section>
      <section className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="🔍 Digite o nome do produto..."
            onChange={(e) =>
              navegate({
                search: (prev) => ({ ...prev, query: e.target.value }),
              })
            }
          />
          <button type="button" onClick={() => isFilter(!filter)}>
            Filtro
          </button>
        </div>
        {filter && (
          <div className="filter">
            <h1>Filtros Avançados</h1>
            <div className="category-wrap">
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                onChange={(e) => {
                  navegate({
                    search: (prev) => ({ ...prev, category: e.target.value }),
                  });
                }}
              >
                <option value="eletrônico">Eletrônico</option>
                <option value="vestuário">Vestuário</option>
                <option value="perecível">Perecíveis</option>
              </select>
            </div>
            <div className="price-wrap">
              <label htmlFor="price">Preço: R$ 0 - R$ {lagerPrice} </label>
              <input
                type="range"
                id="price"
                min={0}
                max={lagerPrice}
                onChange={(e) =>
                  navegate({
                    search: (prev) => ({ ...prev, price: e.target.value }),
                  })
                }
              />
            </div>
            <div className="quant-wrap">
              <label htmlFor="quant">Quantidade: 0 - {lagerQuantity} </label>
              <input
                type="range"
                id="quant"
                min={0}
                max={lagerQuantity}
                onChange={(e) =>
                  navegate({
                    search: (prev) => ({ ...prev, quantity: e.target.value }),
                  })
                }
              />
            </div>
          </div>
        )}
      </section>
      <div className="prods-title">
        <h1> {products?.length} produtos encontrados</h1>
      </div>
      <section className="prods-wrap">
        {products?.map((item) => (
          <article className="product" key={item.idProduct}>
            <div className="prod-name">
              <h1> {item.name} </h1>
              <p> {item.category} </p>
            </div>
            <div className="prod-price">
              <h2>R$ {item.price} </h2>
              <p> {item.quantity} em estoque</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
