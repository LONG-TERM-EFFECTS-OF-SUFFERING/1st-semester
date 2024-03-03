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
 * Concatenates two lists together.
 *
 * @param list1 - An array.
 * @param list2 - An array.
 * @returns the concatenation of "list1" and "list2".
 */

function concat(list1, list2) {
	if (isEmpty(list1)) {
		return list2
	} else {
		return cons(first(list1), concat(rest(list1), list2))
	}
}


/**
 * Returns a new list with the elements in reverse order of the taken list as input.
 *
 * @param list - An array.
 * @returns the inverted list.
 */

function invert(list) {
	if (isEmpty(list)) {
		return []
	} else {
		return concat(invert(rest(list)) , [first(list)])
	}
}

// Tests
// console.log(invert([]))
// console.log(invert([1]))
// console.log(invert([4, 1, 2, 7, 4, 1]))
// console.log(invert([1, 2, 1]))
