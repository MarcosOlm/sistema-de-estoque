import connect from "../database.js";

export class ProductRepository {
    async create(prod) {
        const db = connect();
        const [result] = await db.query();

        return result;
    }
}