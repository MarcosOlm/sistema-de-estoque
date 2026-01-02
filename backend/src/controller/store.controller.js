import { StoreService } from "../service/store.service.js";

export class StoreController {
  _service = new StoreService();

  async create(req, res) {
    try {
      const result = await this._service.register(req.body);
      return res.status(201).json({
        message: "loja criada com sucesso",
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
      const result = await this._service.remove(req.body);
      return res.status(201).json({
        message: "loja deletada com sucesso",
        return: result,
      });
    } catch (err) {
      res.status(400).json({
        error: err.message,
      });
    }
  }

  async update(req, res) {
    try {
      const result = await this._service.update(req.body);
      return res.status(201).json({
        message: "loja alterada com sucesso",
        return: result,
      });
    } catch (err) {
      res.status(400).json({
        error: err.message,
      });
    }
  }
}
