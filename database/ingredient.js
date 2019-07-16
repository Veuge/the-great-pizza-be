import conn from "./connection";
import { NotFoundError } from "./errors";

class IngredientService {
  getAll() {
    return new Promise((resolve, reject) => {
      conn.query('select * from ingredient', (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result)
        }
      })
    });
  }
}

export default IngredientService;
