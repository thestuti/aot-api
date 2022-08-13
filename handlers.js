// Importing the quotes
const quotes = require("./quotes/quotes.js")

const getAllQuotes = (req, res) => {
	const count = parseInt(req.query.count)

	// If count is not specified, then send all quotes
	if (!count)
		return res.json({
			success: true,
			count: quotes.length,
			quotes,
		})

	if (count > quotes.length)
		return res.status(400).json({
			success: false,
			error: `Specified number exceeds number of quotes. Total number of quotes right now are ${quotes.length}`,
		})

	if (count < 0)
		return res.status(400).json({
			success: false,
			error: "Are you retarded?",
		})

	// If count is specified and is above 0 and not more than no. of existing quotes
	res.json({
		success: true,
		count,
		quotes: quotes.slice(0, count),
	})
}

const getRandomQuote = (req, res) => {
	const count = parseInt(req.query.count)

	// If count is not specified, then send a random quote
	if (!count)
		return res.json({
			success: true,
			count: quotes.length,
			quote: quotes[Math.floor(Math.random() * quotes.length)],
		})

	if (count > quotes.length)
		return res.status(400).json({
			success: false,
			error: `Specified number exceeds number of quotes. Total number of quotes right now are ${quotes.length}`,
		})

	if (count < 0)
		return res.status(400).json({
			success: false,
			error: "Are you retarded?",
		})

	//  If count is specified, then send 'N' random quotes
	const data = []

	for (let i = 0; i < count; i++) {
		data.push(quotes[Math.ceil(Math.random() * quotes.length)])
	}

	res.json({
		success: true,
		count,
		quotes: data,
	})
}

module.exports = {
	getAllQuotes,
	getRandomQuote,
}
