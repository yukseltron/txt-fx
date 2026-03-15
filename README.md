[![NPM Version](https://badge.fury.io/js/txt-fx.svg?style=flat)](https://npmjs.org/package/txt-fx)
# txt-fx

Text effects

## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Effects](#effects)
    - [Scrambler](#scrambler)
    - [Shuffler](#shuffler)
    - [Replacer](#replacer)
    - [ReverseCensor](#reversecensor)
    - [Glitch](#glitch)
    - [SlowReveal](#slowreveal)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

```sh
npm i txt-fx
```

## Usage

Import the package and create an instance of any effect:

```js
import TextFX from 'txt-fx'

const el = document.querySelector('#headline');

const fx = new TextFX.Scrambler();
fx.scramble(el);
```

---

## Effects

### Scrambler

Scrambles the text by swapping random characters with symbols, then optionally restores.

![scrambler](https://github.com/yukseltron/txt-fx/assets/14843458/41236b28-46e7-4974-8a03-cd454d004100)

```js
const { scramble } = new TextFX.Scrambler();
scramble(element, delay, count, restore, items);
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| element | HTMLElement | — | Target element |
| delay | number | `200` | Ms between each change |
| count | number | `20` | Number of iterations |
| restore | boolean | `true` | Restore original text when done |
| items | string[] | `['@', '#', '$', ...]` | Characters to scramble with |

---

### Shuffler

Shuffles the characters of the text into a random order on each iteration.

![Shuffler](https://github.com/yukseltron/txt-fx/assets/14843458/ad1febd3-577e-4a22-b3e3-015f67016816)

```js
const { shuffle } = new TextFX.Shuffler();
shuffle(element, delay, count, restore);
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| element | HTMLElement | — | Target element |
| delay | number | `200` | Ms between each shuffle |
| count | number | `20` | Number of shuffles |
| restore | boolean | `true` | Restore original text when done |

---

### Replacer

Replaces each character sequentially with a censor character, left to right.

![Replacer](https://github.com/yukseltron/txt-fx/assets/14843458/f7b66c7e-c2d5-4cfb-acae-f3633b0d613f)

```js
const { replace } = new TextFX.Replacer();
replace(element, delay, char, restore);
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| element | HTMLElement | — | Target element |
| delay | number | `200` | Ms between each replacement |
| char | string \| string[] | `'█'` | Replacement character(s) |
| restore | boolean | `false` | Restore original text when done |

---

### ReverseCensor

Starts with the text fully censored and reveals each character left to right.

```js
const { reveal } = new TextFX.ReverseCensor();
reveal(element, delay, char);
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| element | HTMLElement | — | Target element |
| delay | number | `200` | Ms between each reveal |
| char | string | `'█'` | Character used to mask text |

---

### Glitch

Rapidly corrupts random characters with glitch symbols, then restores. `intensity` controls what fraction of characters are hit per frame.

```js
const { glitch } = new TextFX.Glitch();
glitch(element, delay, count, restore, intensity, items);
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| element | HTMLElement | — | Target element |
| delay | number | `50` | Ms between each frame |
| count | number | `10` | Number of glitch frames |
| restore | boolean | `true` | Restore original text when done |
| intensity | number | `0.5` | Fraction of chars corrupted per frame (0–1) |
| items | string[] | `['▓', '░', ...]` | Glitch characters to use |

---

### SlowReveal

Reveals each character left to right. Before settling, each character slot-machine cycles through random symbols.

```js
const { reveal } = new TextFX.SlowReveal();
reveal(element, delay, scramblePerChar, items);
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| element | HTMLElement | — | Target element |
| delay | number | `200` | Ms between each step |
| scramblePerChar | number | `3` | Random cycles shown before each character is revealed |
| items | string[] | `['@', '#', '$', ...]` | Characters to cycle through |

---

## Running the tests

```sh
npm test
```

## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Hamid Yuksel
