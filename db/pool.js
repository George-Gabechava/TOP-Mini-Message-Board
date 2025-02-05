require("dotenv").config();
const { Pool } = require("pg");

// All of the following properties should be read from environment variables
module.exports = new Pool({
  connectionString: process.env.DB_URL,
  // host: process.env.DB_HOST, 
  // user: process.env.DB_USER,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT
});
