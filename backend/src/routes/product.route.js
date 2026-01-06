import { Router } from "express";
import { ProductController } from '../controller/product.controller.js'

const ProductRoute = Router();
const controller = new ProductController();

ProductRoute.get('/', controller.getAll.bind(controller));
ProductRoute.get('/:idProduct', controller.getById.bind(controller));
ProductRoute.post('/', controller.create.bind(controller));
ProductRoute.delete('/', controller.delete.bind(controller));
ProductRoute.put('/', controller.update.bind(controller));

export default ProductRoute;