const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const { PORT } = require("./config");

const { getAllQuotes, getRandomQuote } = require("./controllers");

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: "You have been rate limited. Please try again later.",
});

app.enable("trust proxy");

app.use(express.static("public"));

app.use(limiter);

app.use(cors());

app.get("/all", getAllQuotes).get("/random", getRandomQuote);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
