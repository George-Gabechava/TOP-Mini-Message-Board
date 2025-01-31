const { Pool } = require("pg");

// All of the following properties should be read from environment variables
module.exports = new Pool({
  host: "", // or wherever the db is hosted
  user: "",
  database: "",
  password: "",
  port: 5432 // The default port
});
