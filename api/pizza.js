import express from "express";
import PizzaService from "../database/pizza";
import asyncMiddleware from "./handler";

const pizzaService = new PizzaService();

const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {
  const data = await pizzaService.getAll();
  const response = {
    pizzas: data,
    message: "List of pizzas retrieved successfully."
  }
  return res.status(200).send(response);
}));

router.get('/:id', asyncMiddleware(async (req, res, next) => {
  const pizzaId = req.params.id;
  const pizza = await pizzaService.getById(pizzaId);
  const response = {
    pizza,
    message: `Pizza with id ${pizzaId} retrieved successfully.`
  }
  return res.status(200).send(response);
}));

router.post('/', asyncMiddleware(async (req, res) => {
  const data = {
    name: req.body.name,
    price: req.body.price,
    ingredients: req.body.ingredients
  };
  const result = await pizzaService.create(data);
  result.message = "New pizza created successfully."
  return res.status(200).send(result);
}));

router.put('/:id', asyncMiddleware(async (req, res) => {
  const pizzaId = req.params.id;
  const pizza = await pizzaService.getById(pizzaId);
  const data = {
    name: req.body.name || pizza.name,
    price: req.body.price || pizza.price,
    ingredients: req.body.ingredients || []
  };
  const result = await pizzaService.update(pizza.id, data);
  result.message = "Pizza updated successfully."
  return res.status(200).send(result);
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  const pizzaId = req.params.id;
  const pizza = await pizzaService.getById(pizzaId);
  const result = await pizzaService.delete(pizza.id);
  result.message = `Pizza with id ${pizzaId} deleted.`;
  return res.status(200).send(result);
}));

export default router;
