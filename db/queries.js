const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM my_messages ORDER BY added DESC");
  return rows;
}

async function insertMessage(user, text) {
  const timestamp = new Date();
  const query = "INSERT INTO my_messages (name, text, added) VALUES ($1, $2, $3)";
  await pool.query(query, [user, text, timestamp]);
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
