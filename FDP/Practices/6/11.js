const { cons, first, rest, isEmpty, isList } = require("functional-light")


/**
 * Returns a new list with the element inserted at the correct position in ascending order in the list.
 * taken as input.
 *
 * @param list - An array of numbers or any objects with order that is already sorted in
 * ascending order.
 * @param element - The element to be inserted into the list.
 * @returns a list with the element inserted in the correct position in the ordered list.
 */

function insertInOrder(list, element) {
	if (isEmpty(list)) {
		return [element]
	} else if (first(list) >= element) {
		return cons(element, list)
	} else {
		return cons(first(list), insertInOrder(rest(list), element))
	}
}

// Tests
// console.log(insertInOrder([], -2.3))
// console.log(insertInOrder([-2, 3, 5, 5, 6], 4))
// console.log(insertInOrder([-2, 3, 5, 5, 6], 3))
// console.log(insertInOrder([-2, 3, 5, 5, 6], 8))
// console.log(insertInOrder([-2, 3, 5, 5, 6], -3))
// console.log(insertInOrder([-2, 3, 5, 5, 6], -2))
// console.log(insertInOrder([-2, 3, 5, 5, 6], 5.2))
