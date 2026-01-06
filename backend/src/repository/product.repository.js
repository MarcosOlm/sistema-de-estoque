import connect from "../database.js";

export class ProductRepository {
    async getAll(idStore) {
        const db = await connect();
        const [result] = await db.query("SELECT * FROM products WHERE FK_idStore = ?", [
            idStore,
        ])
        return result;
    }

    async getById(idProduct) {
        const db = await connect();
        const [result] = await db.query("SELECT * FROM products WHERE idProduct = ?", [
            idProduct,
        ])
        return result;
    }

    async create(name, price, quantity, idStore) {
        const db = await connect();
        const [result] = await db.query("INSERT INTO products (name, price, quantity, FK_idStore) VALUES (?, ?, ?, ?)", [
            name, price, quantity, idStore,
        ]);
        return result;
    }

    async delete(idProduct) {
        const db = await connect();
        const [result] = await db.query("DELETE FROM products WHERE idProduct = ?", [
            idProduct,
        ])
        return result;
    }

    async update(idProduct, field) {
        const db = await connect();
        const [result] = await db.query(`UPDATE products SET ${checkField(field)} WHERE idProduct = ?`, [
            idProduct,
        ])
        return result;
    }
}

// Recursive function

function checkField(field, index=0, query=[]) {
  if (Object.entries(field).length == index) {
    return query;
  }
  if (Object.values(field).at(index).length > 0 && Object.keys(field).at(index) != 'idStore' && Object.keys(field).at(index) != 'idProduct') {
    query.push(`${Object.keys(field).at(index)} = '${Object.values(field).at(index)}'`);
  }
  return checkField(field, index+1, query);
}
