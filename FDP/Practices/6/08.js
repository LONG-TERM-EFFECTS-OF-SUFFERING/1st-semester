const { cons, first, rest, isEmpty, isList } = require("functional-light")


/**
 * Returns a new list with the element taken as input at the specified position.
 *
 * @param element - The value that you want to insert into the list.
 * @param position - The index at which the element will be
 * inserted in the list.
 * @param list - An array.
 * @returns a new list with the "element" at position "position".
 */

function insert(element, position, list) {
	if (position == 0) {
		return cons(element, list)
	} else if (isEmpty(list)) {
		return list
	} else {
		return cons(first(list), insert(element, position - 1, rest(list)))
	}
}

// Tests
// console.log(insert(7, 0, [1, 2, 3]))
// console.log(insert(7, 1, [1, 2, 3]))
// console.log(insert(8, 6, [1, 0, 3, 5, 9, 3]))
// console.log(insert(8, 7, [1, 0, 3, 5, 9, 3]))
// console.log(insert(8, -1, [1, 0, 3, 5, 9, 3]))
// console.log(insert(7, 0, []))
