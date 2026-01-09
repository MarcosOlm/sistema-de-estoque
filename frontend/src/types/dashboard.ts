interface cardQuery {
  quantityProducts: number;
  averagePrice: number;
  amountPrice: number;
  quantityCategory: number;
}

interface graphQuery {
  sizeByCategory: number;
  amountCategory: number;
  category: string;
}

interface noStockAlertQuery {
  name: string;
  quantity: number;
  category: string;
}

interface newProductsQuery {
  name: string;
  price: number;
  category: string;
}

export interface dashboardResponse {
  message: string;
  cardQuery: cardQuery,
  graphQuery: graphQuery[],
  noStockAlertQuery: noStockAlertQuery[],
  newProductsQuery: newProductsQuery[],
}
