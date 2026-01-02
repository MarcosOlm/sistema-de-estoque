import { Router } from "express";
import StoreRoute from "./routes/store.route.js";
import ProductRoute from "./routes/product.route.js";

const routes = Router();

routes.use('/store', StoreRoute);
routes.use('/product', ProductRoute);

export default routes;