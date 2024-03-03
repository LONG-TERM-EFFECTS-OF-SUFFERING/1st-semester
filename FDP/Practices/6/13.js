const { cons, first, rest, isEmpty, isList } = require("functional-light")


/**
 * Returns the list taken as input without the element at the specified index in a new list.
 *
 * @param list - An array.
 * @param index - The position of the item to be removed from the list.
 * @returns a new list without the element at the specified index.
 */

function deleteAnElement(list, index) {
	if (isEmpty(list)) {
		return []
	} else if (index == 0) {
		return rest(list)
	} else {
		return cons(first(list), deleteAnElement(rest(list), index - 1))
	}
}

// Tests
// console.log(deleteAnElement([1, 2, 3], 7))
// console.log(deleteAnElement([1, 2, 3], 1))
// console.log(deleteAnElement([1, 0, 3, 5, 9, 3], 5))
// console.log(deleteAnElement([1, 0, 3, 5, 9, 3], 0))
// console.log(deleteAnElement([], 0))
// console.log(deleteAnElement([2, 4], -1))
