const { cons, first, rest, isEmpty, isList } = require("functional-light")


/**
 * Returns a new list containing only the numbers from the list taken as input.
 *
 * @param list - An array of values.
 * @returns A new list that contains only the numbers from the input list.
 */

function onlyNumbers(list) {
	if (isEmpty(list)) {
		return []
	} else if (isNaN(first(list)) || first(list) === true || first(list) === false) {
		return onlyNumbers(rest(list))
	} else {
		return cons(first(list), onlyNumbers(rest(list)))
	}
}

// Tests
// console.log(onlyNumbers([]))
// console.log(onlyNumbers(["a"]))
// console.log(onlyNumbers(["a", 1]))
// console.log(onlyNumbers([6, "b"]))
// console.log(onlyNumbers([6, "b", 1, 2, true, "b", false, -2]))
