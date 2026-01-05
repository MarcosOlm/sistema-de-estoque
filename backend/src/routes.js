import { Router } from "express";
import StoreRoute from "./routes/store.route.js";
import ProductRoute from "./routes/product.route.js";
import AuthRoute from "./auth/auth.route.js";
import authMiddlewate from './authMiddleware.js'

const routes = Router();

routes.use('/store', authMiddlewate, StoreRoute);
routes.use('/product', authMiddlewate, ProductRoute);
routes.use('/auth', AuthRoute);

export default routes;