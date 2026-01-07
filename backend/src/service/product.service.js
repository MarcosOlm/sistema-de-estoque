import { ProductRepository } from "../repository/product.repository.js";

export class ProductService {
  _repository = new ProductRepository();

  async getAllProducts(idStore) {
    const prods = await this._repository.getAll(idStore);
    if (!prods || prods.length === 0) {
      throw new Error("não existem produtos");
    }
    return prods;
  }

  async getById(idStore, idProduct) {
    const prod = await this._repository.getById(idProduct);
    if (!prod || prod.length === 0) {
      throw new Error("não existe o produto informado");
    }
    if (prod[0].FK_idStore != idStore) {
      throw new Error("acesso negado");
    }
    delete prod[0].FK_idStore;
    return prod[0];
  }

  async getProductsInfo(idStore) {
    const info = this._repository.getProductsInfo(idStore);
    if (!info || info.length === 0) {
      throw new Error('não existem produtos');
    }
    return info;
  }

  async register(idStore, product) {
    const { name, price, quantity, category } = product;
    return await this._repository.create(name, price, quantity, category, idStore);
  }

  async remove(idStore, product) {
    const { idProduct } = product;
    const prod = await this._repository.getById(idProduct);
    if (!prod || prod.length === 0) {
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
    if (!prod || prod.length === 0) {
      throw new Error("produto não encontrado");
    }
    if (prod[0].FK_idStore != idStore) {
      throw new Error("acesso negado");
    }
    return await this._repository.update(idProduct, product);
  }
}
