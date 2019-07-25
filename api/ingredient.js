import express from "express";
import IngredientService from "../database/ingredient";
import asyncMiddleware from "./handler";

const ingredientService = new IngredientService();

const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {
  const data = await ingredientService.getAll();
  const response = {
    ingredients: data,
    message: "List of ingredients retrieved successfully."
  }
  return res.status(200).send(response);
}));

router.get('/:id', asyncMiddleware(async (req, res, next) => {
  const ingredientId = req.params.id;
  const ingredient = await ingredientService.getById(ingredientId);
  const response = {
    ingredient,
    message: `Ingredient with ${ingredientId} retrieved successfully.`
  };
  return res.status(200).send(response);
}));

router.post('/', asyncMiddleware(async (req, res) => {
  const data = {
    name: req.body.name
  };
  const result = await ingredientService.create(data);
  result.message = "Ingredient created successfully."
  return res.status(200).send(result);
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  const ingredientId = req.params.id;
  const ingredient = await ingredientService.getById(ingredientId);
  const result = await ingredientService.delete(ingredient.id);
  result.message = `Ingredient with id ${ingredientId} deleted successfully.`;
  return res.status(200).send(result);
}));

router.put('/:id', asyncMiddleware(async (req, res) => {
  const ingredientId = req.params.id;
  const data = {
    name: req.body.name
  };
  const ingredient = await ingredientService.getById(ingredientId);
  const result = await ingredientService.update(ingredient.id, data);
  result.message = `Ingredient with id ${ingredientId} updated successfully.`
  return res.status(200).send(result);
}));

export default router;
