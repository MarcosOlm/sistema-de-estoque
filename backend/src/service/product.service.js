import { ProductRepository } from "../repository/product.repository.js";

export class ProductService {
  _repository = new ProductRepository();

  async getAllProducts(idStore) {
    const prods = await this._repository.getAll(idStore);
    if (!prods) {
      throw new Error("não existem produtos");
    }
    return prods;
  }

  async getById(idStore, idProduct) {
    const prod = await this._repository.getById(idProduct);
    if (!prod) {
      throw new Error("não existe o produto informado");
    }
    if (prod[0].FK_idStore != idStore) {
      throw new Error("acesso negado");
    }
    return prod[0];
  }

  async register(idStore, product) {
    const { name, price, quantity } = product;
    return await this._repository.create(name, price, quantity, idStore);
  }

  async remove(idStore, product) {
    const { idProduct } = product;
    const prod = await this._repository.getById(idProduct);
    if (!prod) {
      throw new Error("produto não encontrado");
    }
    if (prod[0].FK_idStore != idStore) {
      throw new Error("acesso negado");
    }
    return await this._repository.delete(idProduct);
  }

  async update(idStore, product) {
    const { idProduct } = product;
    const prod = await this._repository.getById(idProduct);
    if (!prod) {
      throw new Error("produto não encontrado");
    }
    if (prod[0].FK_idStore != idStore) {
      throw new Error("acesso negado");
    }
    return await this._repository.update(idProduct, product);
  }
}
