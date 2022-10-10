const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const { PORT } = require("../config");
const { getAllQuotes, getRandomQuote } = require("./controllers");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: "You have been rate limited. Please try again later.",
});

const app = express();

app
  .enable("trust proxy")
  .use(express.static("public"))
  .use(limiter)
  .use(cors())
  .get("/random", getRandomQuote)
  .get("/all", getAllQuotes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
