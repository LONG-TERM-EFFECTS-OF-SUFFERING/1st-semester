const { cons, first, rest, isEmpty, isList } = require("functional-light")


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

// Tests
// console.log(concat([], []))
// console.log(concat([], [1, 2]))
// console.log(concat([3, 5], []))
// console.log(concat([1, 2, true], ["FDP", 3, 8, 2, 7]))
