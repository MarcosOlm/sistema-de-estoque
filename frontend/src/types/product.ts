export interface product {
  idProduct?: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export interface allProductResponse {
  message: string;
  result: product[];
}

export interface productResponse {
  message: string;
  result: product;
}

export interface defaultResponse {
  message: string;
}
