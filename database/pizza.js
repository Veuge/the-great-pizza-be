import conn from "./connection";
import { NotFoundError } from "./errors";

class PizzaService {
  getAll() {
    return new Promise((resolve, reject) => {
      conn.query('select * from pizza', (err, result) => {
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
      conn.query('select * from pizza where id = ?', id, (err, result) => {
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
  create({name, price}) {
    return new Promise((resolve, reject) => {
      conn.query('insert into pizza(name, price) values(?, ?)', [name, price] , (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    });
  }
  update(id, {name, price}) {
    return new Promise((resolve, reject) => {
      conn.query('update pizza set name=?, price=? where id = ?', [name, price, id], (err, result) => {
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
      conn.query('delete from pizza where id = ?', [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    });
  }
}

export default PizzaService;
