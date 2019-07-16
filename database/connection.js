import mysql from "mysql";
import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } from "../settings";
import { InternalError } from "./errors";

const conn = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
});

conn.connect(err => {
  if (err) {
    console.log(err);
    throw new InternalError();
  }
});

export default conn;
