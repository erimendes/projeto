const pg = require("pg");

const connectionString =
  "postgres://user:password@postgres:5432/db";

const db = new pg.Pool({ connectionString });

db.query("SELECT * FROM USERS").then((result) => console.log(result));

export default db;