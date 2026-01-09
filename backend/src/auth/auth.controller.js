import { AuthService } from "./auth.service.js";

export class AuthController {
  _service = new AuthService();

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await this._service.verify(email, password);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      });
      return res.status(200).json({
        message: "login realizado",
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }

  async create(req, res) {
    try {
      const { name, email, password } = req.body;
      const store = await this._service.registrate(name, email, password);
      res.status(201).json({
        message: "loja cadastrada com sucesso",
        result: store,
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }

  async logout(req, res) {
    try {
      res.clearCookie("token");
      return res.status(200).json({
        message: "logout realizado com sucesso",
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }

  async me(req, res) {
    try {
      res.status(200).json({
        message: 'rota segura para prosseguir'
      })
    }
    catch (err) {
      res.status(400).json({
        error: err.message,
      })
    }
  }
}
