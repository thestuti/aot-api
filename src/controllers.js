import { quotes } from "../data/quotes.js";

const getRandomQuote = (req, res) => {
  if (!req.query.count) {
    return res.json({
      count: 1,
      quotes: [quotes[Math.ceil(Math.random() * quotes.length)]],
    });
  }

  const count = parseInt(req.query.count, 10);

  if (isNaN(count)) {
    return res.status(400).json({
      error: "count query must be an integer",
    });
  }

  if (count > quotes.length) {
    return res.status(400).json({
      error: `Specified number exceeds number of quotes. Total number of quotes right now are ${quotes.length}`,
    });
  }

  if (count < 0) {
    return res.status(400).json({
      error: "Are you retarded?",
    });
  }

  let data = [];
  for (let i = 0; i < count; i++) {
    data.push(quotes[Math.ceil(Math.random() * quotes.length)]);
  }

  return res.json({
    count,
    quotes: data,
  });
};

const getAllQuotes = (req, res) => {
  if (!req.query.count) {
    return res.json({
      count: quotes.length,
      quotes,
    });
  }

  const count = parseInt(req.query.count, 10);
  if (isNaN(count)) {
    return res.status(400).json({
      error: "count query must be an integer",
    });
  }

  if (count > quotes.length) {
    return res.status(400).json({
      error: `Specified number exceeds number of quotes. Total number of quotes right now are ${quotes.length}`,
    });
  }

  if (count < 0) {
    return res.status(400).json({
      error: "Are you retarded?",
    });
  }

  return res.json({
    count,
    quotes: quotes.slice(0, count),
  });
};

export { getRandomQuote, getAllQuotes };
