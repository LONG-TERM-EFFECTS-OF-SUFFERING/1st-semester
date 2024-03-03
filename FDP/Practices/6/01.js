const { cons, first, rest, isEmpty, isList } = require("functional-light")


/**
 * Calculates the length of a list recursively.
 *
 * @param list - An array.
 * @returns the length of the list.
 */

function length(list) {
	if (isEmpty(list)) {
		return 0
	} else {
		return 1 + length(rest(list))
	}
}


/**
 * Returns the maximum value in a list.
 *
 * @param list - List of numbers or any objects with order.
 * @returns the maximum value from the given list.
 */

function max(list) {
	if (isEmpty(list)) {
		return null
	} else if (length(list) == 1) {
		return first(list)
	} else {
		return Math.max(first(list), max(rest(list)))
	}
}

// Tests
// console.log(max([]))
// console.log(max([1, 6, 2]))
// console.log(max([-9]))
// console.log(max([1, 6, 20, 3, -6, 8, 9]))
