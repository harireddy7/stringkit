# stringkit
A collection of JavaScript string helper functions 🌟

## Functions

### 1. titleCase

```js
const title = titleCase('the witcher'); // The Witcher
const title = titleCase('brooklyn nine-nine   '); // Brooklyn Nine-nine
```

### 2. reverse

```js
const text = reverse('geralt'); // tlareg
const text = reverse('have a good-day  '); // '  yad doog a evah'
```

### 3. reepat

```js
const text = repeat('*', 5) // *****
const text = repeat('cool', 3) // coolcoolcool
const text = repeat('hey', 0) // ''
```

## Installation

stringkit requires node.js v18 to run

```sh 
git clone https://github.com/harireddy7/stringkit.git

cd stringkit
yarn install

yarn build
```
