import { ProductService } from "../service/product.service.js";

export class ProductController {
  _service = new ProductService();

  async getAll(req, res) {
    try {
      const result = await this._service.getAllProducts(req.idStore);
      return res.status(200).json({
        message: "produtos achados com sucesso",
        result: result,
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }

  async getById(req, res) {
    try {
      const result = await this._service.getById(
        req.idStore,
        req.params.idProduct
      );
      return res.status(200).json({
        message: "produto achado com sucesso",
        result: result,
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }

  async getProductsInfo(req, res) {
    try {
      const result = await this._service.getProductsInfo(req.idStore);
      return res.status(200).json({
        message: "informações achadas com sucesso",
        result: result,
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }

  async create(req, res) {
    try {
      const result = await this._service.register(req.idStore, req.body);
      return res.status(201).json({
        message: "produto cadastro com sucesso",
        result: result,
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const result = await this._service.remove(req.idStore, req.body);
      return res.status(200).json({
        message: "produto deletado com sucesso",
        result: result,
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }

  async update(req, res) {
    try {
      const result = await this._service.update(req.idStore, req.body);
      return res.status(200).json({
        message: "produto alterado com sucesso",
        result: result,
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }
}
