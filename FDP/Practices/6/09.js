const { cons, first, rest, isEmpty, isList } = require("functional-light")


/**
 * The function replaces an element at a given position in a list.
 *
 * @param position - The index at which the element will be
 * replaced in the list. It is a non-negative integer value.
 * @param list - An array.
 * @param element - The value that you want to replace in the list.
 * @returns a modified list where the element at the specified position has been replaced with the new
 * element.
 */

function replace(position, list, element) {
	if (position == 0) {
		return cons(element, rest(list))
	} else if (isEmpty(list)) {
		return list
	} else {
		return cons(first(list), replace(position - 1, rest(list), element))
	}
}

// Tests
// console.log(replace(0, [1, 2, 3], 7))
// console.log(replace(1, [1, 2, 3], 7))
// console.log(replace(5, [1, 0, 3, 5, 9, 3], 8))
// console.log(replace(-1, [1, 0, 3, 5, 9, 3], 8))
// console.log(replace(0, [], 7))
