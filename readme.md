# make-array [![Build Status](https://travis-ci.org/emiljohansson/make-array.svg?branch=master)](https://travis-ci.org/emiljohansson/make-array)

> Returns `array` if it's an array or a new array.

## Usage

```js
var makeArray = require('make-array');

makeArray([1, 2, 3])
// => [1, 2, 3]

makeArray()
// => []
```

## API

### makeArray(array)

Returns the same array or creates a new one.

#### array

Type: `array`

The array to test.

## License

MIT © [Emil Johansson](http://emiljohansson.se)
