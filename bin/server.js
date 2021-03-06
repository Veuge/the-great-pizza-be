import express from "express";
import bodyParser from "body-parser";

import { HTTP_PORT } from "../settings";

import { pizza, ingredient } from "../api";

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/pizza", pizza);
app.use("/api/ingredient", ingredient);

app.listen(HTTP_PORT, () => {
  console.log(`Backend started and listening in port ${HTTP_PORT}`);
});
