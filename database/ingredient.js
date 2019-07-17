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
  getById(id) {
    return new Promise((resolve, reject) => {
      conn.query('select * from ingredient where id = ?', id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length === 0) {
            reject(new NotFoundError());
          } else {
            resolve(result[0]);
          }
        }
      });
    });
  }
  create({name}) {
    return new Promise((resolve, reject) => {
      conn.query('insert into ingredient(name) values(?)', [name] , async (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      conn.query('delete from ingredient where id = ?', [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    });
  }
  update(id, {name}) {
    return new Promise((resolve, reject) => {
      conn.query('update ingredient set name=? where id = ?', [name, id], 
        async (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      )
    });
  }
}

export default IngredientService;
