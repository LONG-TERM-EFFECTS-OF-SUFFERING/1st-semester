const { cons, first, rest, isEmpty, isList, concat } = require("functional-light")
const { filter } = require("./15")
const { map } = require("./16")


/**
 * Returns the smallest number from a given list.
 *
 * @param list - An array of numbers or any objects with order.
 * @returns the smallest number from the given list.
 */

function minor(list) {
	if (isEmpty(rest(list))) {
		return first(list)
	} else {
		return Math.min(first(list), minor(rest(list)))
	}
}

/**
 * Returns a new list without the smallest number in the list taken as input.
 *
 * @param list - An array of numbers or any objects with order.
 * @returns a list without the smallest number or object from the input list.
 */

function deleteMinor(list) {
	if (isEmpty(list)) {
		return []
	} else if (first(list) == minor(list)) {
		return rest(list)
	} else {
		return cons(first(list), deleteMinor(rest(list)))
	}
}

/**
 * Takes a list as input and returns the list sorted in ascending order.
 *
 * @param list - An array of numbers or any objects with order.
 * @returns the sorted list in ascending order.
 */

function sort(list) {
	if (isEmpty(list)) {
		return []
	} else {
		return cons(minor(list), sort(deleteMinor(list)))
	}
}

/**
 * Takes a list as input and returns the list sorted in ascending order, with
 * sublists also sorted recursively.
 *
 * @param list - An array of numbers or any objects with order.
 * @returns the list sorted in ascending order (including its sublists).
 */

function deepSort(list) {
	let numbers = sort(filter(list, (element) => !isList(element)))
	let sublists = map(filter(list, (element) => isList(element)), list => deepSort(list))

	return concat(sublists, numbers)
}

// Tests
// You can use JSON.stringify to see the entire array
// console.log(deepSort([3, 5, 8, [4, 3], 7, [9, 8]]))
// console.log(JSON.stringify(deepSort([3, 5, 2, [4, 2, [3, 5, [9, 7]], 8 , 9], 9])))
// console.log(JSON.stringify(deepSort([[ 4, 2, [ 3, 5, [3] ], 8, 9 ]])))
