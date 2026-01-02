import connect from "../database.js";

const db = connect();

export class ProductRepository {
    async create(prod) {
        const [result] = await db.query();

        return result;
    }
}