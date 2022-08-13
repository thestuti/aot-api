// Importing all dependencies
const express = require("express")
const rateLimit = require("express-rate-limit")
const cors = require("cors")

// Handler functions
const { getAllQuotes, getRandomQuote } = require("./controllers")

// Initializing app
const app = express()

// Initializing limiter
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 100,
	message:
		"Too many requests in too small time. Chill. Take a walk or something idk.",
})

// Trust proxy
app.enable("trust proxy")

// Static folder
app.use(express.static("public"))

// Limiter middleware
app.use(limiter)

// Cors middleware
app.use(cors())

// Routes
app.get("/all", getAllQuotes).get("/random", getRandomQuote)

// Listening to the app
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))
