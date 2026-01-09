import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import authMiddleware from '../authMiddleware.js'

const AuthRoute = Router();
const controller = new AuthController();

AuthRoute.post('/login', controller.login.bind(controller));
AuthRoute.post('/registrate', controller.create.bind(controller));
AuthRoute.post('/logout', controller.logout.bind(controller));
AuthRoute.get('/me', authMiddleware, controller.me.bind(controller));

export default AuthRoute;