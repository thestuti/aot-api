const quotes = require("./data/quotes.js");

const getAllQuotes = (req, res) => {
  const count = parseInt(req.query.count);
  if (isNaN(count)) {
    return res.status(400).json({
      message: "count query must be an integer",
    });
  }

  if (!count)
    return res.json({
      success: true,
      count: quotes.length,
      quotes,
    });

  if (count > quotes.length)
    return res.status(400).json({
      success: false,
      error: `Specified number exceeds number of quotes. Total number of quotes right now are ${quotes.length}`,
    });

  if (count < 0)
    return res.status(400).json({
      success: false,
      error: "Are you retarded?",
    });

  res.json({
    success: true,
    count,
    quotes: quotes.slice(0, count),
  });
};

const getRandomQuote = (req, res) => {
  const count = parseInt(req.query.count);

  if (isNaN(count)) {
    return res.status(400).json({
      message: "count query must be an integer",
    });
  }
  if (!count)
    return res.json({
      success: true,
      count: quotes.length,
      quote: quotes[Math.floor(Math.random() * quotes.length)],
    });

  if (count > quotes.length)
    return res.status(400).json({
      success: false,
      error: `Specified number exceeds number of quotes. Total number of quotes right now are ${quotes.length}`,
    });

  if (count < 0)
    return res.status(400).json({
      success: false,
      error: "Are you retarded?",
    });

  const data = [];

  for (let i = 0; i < count; i++) {
    data.push(quotes[Math.ceil(Math.random() * quotes.length)]);
  }

  res.json({
    success: true,
    count,
    quotes: data,
  });
};

module.exports = {
  getAllQuotes,
  getRandomQuote,
};
