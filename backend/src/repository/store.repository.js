import connect from "../database";

const db = connect();

export class StoreRepository {
    async create(store) {
        const [result] = await db.query();

        return result;
    }

    async findByEmail(email) {
        const [rows] = await db.query();

        return rows;
    }
}