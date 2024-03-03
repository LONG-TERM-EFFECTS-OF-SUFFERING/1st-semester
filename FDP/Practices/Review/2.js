
const { cons, first, rest, isEmpty, isList, length } = require("functional-light")


/**
 * Takes a list as input and returns the same list without the last element.
 *
 * @param list - An array.
 * @returns the list without the last element.
 */

function deleteLast(list) {
	if (isEmpty(rest(list))) {
		return []
	} else {
		return cons(first(list), deleteLast(rest(list)))
	}
}


/**
 * Returns the last element of a given list.
 *
 * @param list - An array.
 * @returns The last element of the list is being returned.
 */

function last(list) {
	if (isEmpty(rest(list))) {
		return first(list)
	} else {
		return last(rest(list))
	}
}


/**
 * Takes a list as input and returns the same list but in reverse order.
 *
 * @param list - An array
 * @returns the input list in reverse order.
 */

function invert(list) {
	if (isEmpty(list)) {
		return []
	} else {
		return cons(last(list), invert(deleteLast(list)))
	}
}

// Tests
// console.log(invert([]))
// console.log(invert([1]))
// console.log(invert([4, 1, 2, 7, 4, 1]))
// console.log(invert([1, 2, 1]))
