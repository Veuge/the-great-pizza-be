import express from "express";
import PizzaService from "../database/pizza";
import asyncMiddleware from "./handler";

const pizzaService = new PizzaService();

const router = express.Router();

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    const data = await pizzaService.getAll();
    return res.status(200).send(data);
  })
);

export default router;
