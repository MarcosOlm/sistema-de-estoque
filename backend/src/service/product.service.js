import { ProductRepository } from "../repository/product.repository";

export class ProductService {
    _repository = new ProductRepository();

    async register(prod) {
        return await this._repository.create(prod);
    }
}