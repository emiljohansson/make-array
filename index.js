"use strict";

/**
 * Returns `array` if it's an array or a new array.
 *
 * @param {Array} array The array to test.
 * @return {Array} array Either the same array or a new.
 * @example
 *
 * makeArray([1, 2, 3])
 *
 * // => [1, 2, 3]
 *
 * makeArray()
 *
 * // => []
 *
 * @param  {*} array
 * @return {Array}
 */
function makeArray(array) {
    return Array.isArray(array) ? array : [];
}

module.exports = makeArray;
