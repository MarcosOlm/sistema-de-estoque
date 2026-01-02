import { Router } from "express";
import { ProductController } from '../controller/product.controller.js'

const ProductRoute = Router();
const controller = new ProductController();

ProductRoute.post('/', controller.create.bind(controller));

export default ProductRoute;