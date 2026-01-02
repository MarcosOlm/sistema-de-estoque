import { Router } from "express";
import { StoreController } from "../controller/store.controller.js";

const StoreRoute = Router();
const controller = new StoreController();

StoreRoute.post('/', controller.create.bind(controller));
StoreRoute.delete('/', controller.delete.bind(controller));
StoreRoute.put('/', controller.update.bind(controller));

export default StoreRoute;