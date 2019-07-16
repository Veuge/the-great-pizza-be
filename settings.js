const HTTP_PORT = process.env.HTTP_PORT || 8000;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_NAME = process.env.DB_NAME || 'pizza_db';
const DB_USER = process.env.DB_USER || 'pizza';
const DB_PASS = process.env.DB_PASS;
if (!DB_PASS) {
  throw Error("DB_PASS setting not set")
}

export {
  HTTP_PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASS,
};
