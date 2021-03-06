import express from "express";
import PizzaService from "../database/pizza";
import asyncMiddleware from "./handler";

const pizzaService = new PizzaService();

const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {
  const data = await pizzaService.getAll();
  return res.status(200).send(data);
}));

router.get('/:id', asyncMiddleware(async (req, res, next) => {
  const pizzaId = req.params.id;
  const pizza = await pizzaService.getById(pizzaId);
  return res.status(200).send(pizza);
}));

router.post('/', asyncMiddleware(async (req, res) => {
  const data = {
    name: req.body.name,
    price: req.body.price,
    ingredients: req.body.ingredients
  };
  const result = await pizzaService.create(data);
  return res.status(200).send(result);
}));

router.put('/:id', asyncMiddleware(async (req, res) => {
  const pizzaId = req.params.id;
  const data = {
    name: req.body.name,
    price: req.body.price,
    ingredients: req.body.ingredients || []
  };

  const pizza = await pizzaService.getById(pizzaId);
  const result = await pizzaService.update(pizza.id, data);
  return res.status(200).send(result);
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  const pizzaId = req.params.id;
  const pizza = await pizzaService.getById(pizzaId);
  const result = await pizzaService.delete(pizza.id);
  return res.status(200).send(result);
}));

export default router;
