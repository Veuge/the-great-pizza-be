import conn from "./connection";
import { NotFoundError } from "./errors";

class PizzaService {
  getAll() {
    return new Promise((resolve, reject) => {
      conn.query('select * from pizza', async (err, result) => {
        if (err) {
          reject(err);
        } else {
          for (let i = 0; i < result.length; ++i) {
            const pizza = result[i];
            const ingredients = await this.getIngredientsByPizza(pizza.id);
            pizza.ingredients = ingredients;
          }
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
  getIngredientsByPizza(pizzaId) {
    return new Promise((resolve, reject) => {
      conn.query(
        `select * from ingredient 
        inner join pizza_ingredient on ingredient.id = pizza_ingredient.ingredientId 
        where pizza_ingredient.pizzaId=?`, 
        [pizzaId], 
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      )
    })
  }
}

export default PizzaService;
