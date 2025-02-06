const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM my_messages ORDER BY added DESC");
  return rows;
}

async function insertMessage(user, text) {
  // const timestamp = new Date().toISOString();
  const query = "INSERT INTO my_messages (name, text, added) VALUES ($1, $2, NOW())";
  await pool.query(query, [user, text]);
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM my_messages WHERE id = $1", [id]);
  // Return the first message if not found. 
  return rows[0];
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessageById
};
