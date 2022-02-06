const express = require('express');
const rateLimit = require("express-rate-limit");
const cors = require('cors')
const {
      randomQuote,
      allQuotes,
      randomQuotes,
      numOfQuotes
} = require('./handlers');
const app = express();

const limiter = rateLimit({
      windowMs: 10 * 60 * 1000, 
      max: 100, 
      message: "Too many requests in too small time. Chill. Take a walk or something idk."
});

app.enable("trust proxy");
app.set('view engine', 'ejs');
app.set('json spaces', 4);
app.use(limiter);
app.use(cors());

app.get('/', (req, res) => {
      res.render('index', {amount: numOfQuotes()})
})

app.get('/random', (req, res) => {
      res.json(randomQuote())
})

app.get('/random/:amount', (req, res) => {
      res.json(randomQuotes(req.params.amount))
})

app.get('/all', (req, res) => {
      res.json(allQuotes())
})

port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port ${port}!`));