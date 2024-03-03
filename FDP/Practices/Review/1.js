const { cons, first, rest, isEmpty, isList, length } = require("functional-light")


/**
 * Return the largest number in a given list.
 *
 * @param list - An array of numbers or any objects with order.
 * @returns the maximum number in the list.
 */

function max(list) {
	if (isEmpty(list)) {
		return null
	} else if (isEmpty(rest(list))) {
		return first(list)
	} else {
		return Math.max(first(list), max(rest(list)))
	}
}

// Tests
// console.log(max([]))
// console.log(max2([1, 6, 2]))
// console.log(max2([-9]))
// console.log(max([1, 6, 20, 3, -6, 8, 9]))
