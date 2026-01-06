import { Router } from "express";
import StoreRoute from "./routes/store.route.js";
import ProductRoute from "./routes/product.route.js";
import AuthRoute from "./auth/auth.route.js";
import authMiddleware from './authMiddleware.js'

const routes = Router();

routes.use('/store', authMiddleware, StoreRoute);
routes.use('/product', authMiddleware, ProductRoute);
routes.use('/auth', AuthRoute);

export default routes;