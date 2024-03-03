const { cons, first, rest, isEmpty, isList } = require("functional-light")


/**
 * Takes a list and a condition function as input, and returns a new list
 * containing only the elements that satisfy the condition.
 *
 * @param list - An array that we want to filter.
 * @param condition - A function that returns a boolean
 * value indicating whether the element satisfies the condition or not.
 * @returns a list containing the elements that satisfy the condition.
 */

function filter(list, condition) {
	if (isEmpty(list)) {
		return []
	} else if (condition(first(list))) {
		return cons(first(list), filter(rest(list), condition))
	} else {
		return filter(rest(list), condition)
	}
}

// Tests
// console.log(filter([1, 3, 4, 6, 0, 1], (a) => a > 3))
// console.log(filter(["ab", "acv", "gggg", "cds"], (a) => a.length == 3))


module.exports = {
	filter
}
