import express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";

import { PORT } from "../config.js";
import { getAllQuotes, getRandomQuote } from "./controllers.js";

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: "You have been rate limited. Please try again later.",
});

const app = express()
  .enable("trust proxy")
  .use(express.static("public"))
  .use(limiter)
  .use(cors())
  .get("/random", getRandomQuote)
  .get("/all", getAllQuotes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
