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
 * Calculates the sum of all the elements in a given list.
 *
 * @param list - List of numbers.
 * @returns the sum of all the elements in the given list.
 */

function sum(list) {
	if (isEmpty(list)) {
		return 0
	} else {
		return first(list) + sum(rest(list))
	}
}


/**
 * Calculates the average of a list of numbers returns the truncated value.
 *
 * @param list - An array of numbers.
 * @returns The average of the numbers in the list (truncated).
 */

function average(list) {
	if (isEmpty(list)) {
		return null
	} else {
		return Math.trunc(sum(list) / length(list))
	}
}

// Tests
// console.log(average([]))
// console.log(average([5]))
// console.log(average([0, 1, 8]))
// console.log(average([10, 2, 3, 1, 4, 4, 4]))
