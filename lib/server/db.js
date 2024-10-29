import mysql from "mysql2";

// Create a single connection instead of a pool
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "yourpassword",
  database: process.env.DB_NAME || "yourdbname",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1);
  } else {
    console.log("Connected to MySQL");
  }
});

// Create the adapter with `query` and `execute` methods
const adapter = {
  query: (statement, params = []) => {
    return new Promise((resolve, reject) => {
      connection.query(
        statement,
        Array.isArray(params) ? params : [],
        (err, results) => {
          if (err) {
            console.error("Query Error:", err);
            return reject(err);
          }
          resolve(results);
        }
      );
    });
  },
  execute: (statement, params = []) => {
    return new Promise((resolve, reject) => {
      connection.execute(
        statement,
        Array.isArray(params) ? params : [],
        (err, result) => {
          if (err) {
            console.error("Execute Error:", err);
            return reject(err);
          }
          resolve(result);
        }
      );
    });
  },
};

export const db = adapter;
