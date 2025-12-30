import { StoreService } from "../service/store.service.js";

export class StoreController {
    _service = new StoreService();

    async create(req, res) {
        try {
            const result = await this._service.register(req.body);
            return res.status(201).json({
                massage: 'usuário criado com sucesso',
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