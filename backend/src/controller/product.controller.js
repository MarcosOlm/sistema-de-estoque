import { ProductService } from "../service/product.service.js";

export class ProductController {
    _service = new ProductService();

    async create(req, res) {
        try {
            const result = await this._service.register(req.body);
            return res.status(201).json({
                massage: 'produto cadastro com sucesso',
                result: result,
            })
        }
        catch (err) {
            return res.status(400).json({
                error: err.massage,
            })
        }
    }
}