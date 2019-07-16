import express from "express";
import IngredientService from "../database/ingredient";
import asyncMiddleware from "./handler";

const ingredientService = new IngredientService();

const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {
  const data = await ingredientService.getAll();
  return res.status(200).send(data);
}));

export default router;
