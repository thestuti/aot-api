# ![](views/images/banner.png)

# Attack On Titan quotes API

A simple API to retrieve some quotes of Attack On Titan

:globe_with_meridians: Website and demo: https://aot-quotes-api.herokuapp.com/

**Check out python version of this project by Nishant Sensei : https://github.com/thenishantsapkota/aot-api-py**

## Installation

```
git clone https://github.com/thestuti/aot-api
```

```
cd aot-api
```

- create .env file, add variables according to .env.example

```
cp .env.example .env
```

```
npm install
```

```
npm run dev
```

## Production host

[https://aot-quotes-api.herokuapp.com/](https://aot-quotes-api.herokuapp.com/)

## API

### `GET /random`

Get a random quote in this format:

> [https://aot-quotes-api.herokuapp.com/random](https://aot-quotes-api.herokuapp.com/random)

```json
{
  "id": 26,
  "quote": "Everyone can make a choice after they have learned what it will result in. It is so easy to say we should have done it this way afterwards. But you can’t know what your choice will result in before actually choosing."
}
```

### `GET /random?count={number}`

Returns an array with `{number}` quotes e.g. `GET /random?count=5`.

> [https://aot-quotes-api.herokuapp.com/random/5/](https://aot-quotes-api.herokuapp.com/random/5/)

```json
[
  {
    "id": 61,
    "quote": "Asking me for compassion is mistaken. After all I have no heart or time to spare."
  },
  {
    "id": 41,
    "quote": "Some scouts’ lives are more valuable than others, only those dumb enough to acknowledge that join us."
  },
  {
    "id": 23,
    "quote": "I don’t like the terms good person or bad person because it’s impossible to be entirely good to everyone, or entirely bad to everyone. To some, you are a good person, while to others you are a bad person."
  },
  {
    "id": 27,
    "quote": "I was, I am, and I remain a soldier, sworn to devote my heart and soul to the restoration of humankind. There is no greater glory than dying for that belief!"
  },
  {
    "id": 20,
    "quote": "To surpass monsters, you must be willing to abandon your humanity."
  }
]
```

## Contributing

If you want to add some quotes, just add them in `quotes/quotes.js` file and do a pull request !

<b> Contributors </b>

[Anuj aka TheCoolDev](https://github.com/TheCoolGDev) <br>
[Dipshan](https://github.com/dipshanadh)

# TODO

- [ ] Better UI
- [ ] Make site responsive for mobile
- [ ] Add authors in API
