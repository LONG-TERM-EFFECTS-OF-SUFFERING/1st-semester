const { cons, first, rest, isEmpty, isList } = require("functional-light")


/**
 * Checks if the element taken as input is in the list taken as input.
 *
 * @param list - An array.
 * @param element - The value that we are checking if it exists in the list.
 * @returns a boolean value - true if the element is found in the list, and false if it is not found.
 */

function isInList(list, element) {
	if (first(list) == element) {
		return true
	} else if (isEmpty(list)) {
		return false
	} else {
		return isInList(rest(list), element)
	}
}


/**
 * Returns the index of an element in a list.
 *
 * @param list - An array.
 * @param element - The value that you want to search for in the list.
 * @returns the index of the element in the list.
 */

function lookupInList(list, element) {
	if (first(list) == element) {
		return 0
	} else {
		return 1 + lookupInList(rest(list), element)
	}
}


/**
 * Return the index in which the element taken as input that is not found in the list
 * should be (ascending order).
 *
 * @param list - An array of numbers or any objects with order that is already sorted in
 * ascending order.
 * @param element - The value of the element that is not in the list.
 * @returns the index at which the element should be in the list.
 */

function lookupOutList(list, element) {
	if (first(list) > element) {
		return 0
	} else if (isEmpty(list)) {
		return 0
	} else {
		return 1 + lookupOutList(rest(list), element)
	}
}


/**
 * Returns the index of an element in a list if it is present, otherwise it returns -(n + 1)
 * where n is the position where the element should be inserted in order to keep the list
 * sorted.
 *
 * @param list - An array of numbers or any objects with order that is already sorted in
 * ascending order.
 * @param element - The element that we are searching for in the list.
 * @returns the index of the element in the list if it is found, or -(n + 1) if the element is not
 * found.
 */

function lookupx(list, element) {
	if (isInList(list, element)) {
		return lookupInList(list, element)
	} else {
		return -lookupOutList(list, element) - 1 // -(n + 1) = - n - 1
	}
}

// Tests
// console.log(lookupx([1, 2, 3, 4], 2))
// console.log(lookupx([1, 2, 3, 4], 3.5))
// console.log(lookupx([], 1.1))
// console.log(lookupx([2, 4, 6, 10], 10))
// console.log(lookupx([2, 4, 6, 10], 11))
