import express from "express";
import IngredientService from "../database/ingredient";
import asyncMiddleware from "./handler";

const ingredientService = new IngredientService();

const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {
  const data = await ingredientService.getAll();
  return res.status(200).send(data);
}));

router.get('/:id', asyncMiddleware(async (req, res, next) => {
  const ingredientId = req.params.id;
  const ingredient = await ingredientService.getById(ingredientId);
  return res.status(200).send(ingredient);
}));

router.post('/', asyncMiddleware(async (req, res) => {
  const data = {
    name: req.body.name
  };
  const result = await ingredientService.create(data);
  return res.status(200).send(result);
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  const ingredientId = req.params.id;
  const ingredient = await ingredientService.getById(ingredientId);
  const result = await ingredientService.delete(ingredient.id);
  return res.status(200).send(result);
}));

router.put('/:id', asyncMiddleware(async (req, res) => {
  const ingredientId = req.params.id;
  const data = {
    name: req.body.name
  };
  const ingredient = await ingredientService.getById(ingredientId);
  const result = await ingredientService.update(ingredient.id, data);
  return res.status(200).send(result);
}));

export default router;
