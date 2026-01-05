import connect from "../database.js";

export class StoreRepository {
  async create(name, email, password) {
    const db = await connect();
    const [result] = await db.query(
      "INSERT INTO store (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    return result;
  }

  async delete(idStore) {
    const db = await connect();
    const [result] = await db.query("DELETE FROM store WHERE idStore = ?", [
      idStore,
    ]);
    return result;
  }

  async update(idStore, field) {
    const db = await connect();
    const [result] = await db.query(`UPDATE store SET ${checkField(field)} WHERE idStore = ?`, [
        idStore,
    ]);
    return result;
  }

  async findByEmail(email) {
    const db = await connect();
    const [rows] = await db.query('SELECT * FROM store WHERE email = ?', [
        email,
    ]);
    return rows;
  }
}

// Recursive function

function checkField(field, index=0, query=[]) {
  if (Object.entries(field).length == index) {
    return query;
  }
  if (Object.values(field).at(index).length > 0 && Object.keys(field).at(index) != 'idStore') {
    query.push(`${Object.keys(field).at(index)} = '${Object.values(field).at(index)}'`);
  }
  return checkField(field, index+1, query);
}
