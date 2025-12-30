import { Router } from "express";
import StoreRoute from "./routes/store.route.js";

const routes = Router();

routes.use('/store', StoreRoute);

export default routes;