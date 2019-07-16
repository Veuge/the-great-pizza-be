import conn from "./connection";

class PizzaService {
  getAll() {
    return new Promise((resolve, reject) => {
      conn.query("select * from pizza", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default PizzaService;
