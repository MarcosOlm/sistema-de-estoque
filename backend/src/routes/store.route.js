import { Router } from "express";
import { StoreController } from "../controller/store.controller.js";

const StoreRoute = Router();
const controller = new StoreController();

StoreRoute.post('/', controller.create.bind(controller));

export default StoreRoute;