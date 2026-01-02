import { ProductRepository } from "../repository/product.repository.js";

export class ProductService {
    _repository = new ProductRepository();

    async register(prod) {
        return await this._repository.create(prod);
    }
}