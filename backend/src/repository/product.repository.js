import connect from "../database.js";

export class ProductRepository {
    async getAll(idStore) {
        const db = await connect();
        const [result] = await db.query("SELECT name, price, quantity, category FROM products WHERE FK_idStore = ?", [
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

    async getProductsInfo(idStore) {
        const db = await connect();
        const [cardQuery] = await db.query("SELECT COUNT(*) AS quantityProducts, ROUND(AVG(price), 2) AS averagePrice, SUM(price) AS amountPrice FROM products WHERE FK_idStore = ?", [
            idStore,
        ]);
        const [graphQuery] = await db.query("SELECT COUNT(*) AS sizeByCategory, ROUND(SUM(price * quantity), 2) AS amountCategory, category FROM products WHERE FK_idStore = ? GROUP BY category", [
            idStore,
        ]);
        const [noStockAlertQuery] = await db.query("SELECT name, quantity, category FROM products WHERE FK_idStore = ? AND quantity < 10", [
            idStore,
        ]);
        const [newProductsQuery] = await db.query("SELECT name, price, category FROM products WHERE FK_idStore = ? ORDER BY idProduct DESC LIMIT 2", [
            idStore,
        ]);
        cardQuery[0].quantityCategory = graphQuery.length;
        return [{cardQuery: cardQuery[0]}, {graphQuery: [...graphQuery]}, {noStockAlertQuery: [...noStockAlertQuery]}, {newProductsQuery: [...newProductsQuery]}];
    }

    async create(name, price, quantity, category, idStore) {
        const db = await connect();
        const [result] = await db.query("INSERT INTO products (name, price, quantity, category, FK_idStore) VALUES (?, ?, ?, ?, ?)", [
            name, price, quantity, category, idStore,
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
