[![NPM Version](https://badge.fury.io/js/txt-fx.svg?style=flat)](https://npmjs.org/package/txt-fx)
# txt-fx

Customizable text effects!

## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
    - [Scrambler](#scrambler)
    - [Shuffler](#shuffler)
    - [Replacer](#replacer)
  - [Contributing](#contributing)
  - [Built With](#built-with)
  - [License](#license)

## Installation

To install for your project run:

```sh
npm i txt-fx
```

## Usage
Simply import the package
```js
import TextFX from 'txt-fx'
```

Then create an instance of the effect you want and give it the target element.

```js
const fx = new TextFX.Scrambler();
const element = document.querySelector('#headline');
fx.scramble(element);
```

### Effects
  - [Scrambler](#scrambler)
  - [Shuffler](#Shuffler)
  - [Replacer](#Replacer)

### Scrambler

`Scrambler.scramble`

Scrambles the text with random characters in random order.

![scrambler](https://github.com/yukseltron/txt-fx/assets/14843458/41236b28-46e7-4974-8a03-cd454d004100)

```js
const { scramble } = new TextFX.Scrambler();
scramble(element, delay, count, restore);
```

| Parameter | Type | Default value | Description |
| --- | --- |  --- | --- |
| element | element | - | target element |
| delay | number | 400 | delay between changes |
| count | number | infinity | number of iterations |
| restore | boolean | false | restore text at end of count | 
| items | string[] | [ '@', '#', '$', ...] | random characters to use |

### Shuffler

`Shuffler.shuffle`

shuffles the text's order in place.

![Shuffler](https://github.com/yukseltron/txt-fx/assets/14843458/ad1febd3-577e-4a22-b3e3-015f67016816)


```js
const { shuffle } = new TextFX.Shuffler();
shuffle(element, delay, count, restore);
```

| Parameter | Type | Default value | Description |
| --- | --- |  --- | --- |
| element | element | - | target element |
| delay | number | 400 | delay between changes |
| count | number | infinity | number of iterations |
| restore | boolean | false | restore text at end of count | 


### Replacer

Replaces each char sequentially with a given char or a char from a list of chars.

![Replacer](https://github.com/yukseltron/txt-fx/assets/14843458/f7b66c7e-c2d5-4cfb-acae-f3633b0d613f)

```js
const { replace } = new TextFX.Replacer();
replace(element, delay, restore, char);
```

| Parameter | Type | Default value | Description |
| --- | --- |  --- | --- |
| element | element | - | target element |
| delay | number | 400 | delay between changes |
| restore | boolean | false | restore text at end of count | 
| char | string \|\| string[] | █ | replacement chars |


### Running the tests

```sh
npm test
```


## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:


## License

[MIT License](https://andreasonny.mit-license.org/2019) © Hamid Yuksel
