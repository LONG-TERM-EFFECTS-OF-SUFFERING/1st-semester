const { cons, first, rest, isEmpty, isList } = require("functional-light")


/**
 * Takes a list and a function as input and returns a new list with the results of applying the
 * function to each element of the original list.
 *
 * @param list - An array that we want to apply the function to.
 * @param myFunction - A function that will be applied to each element of the list.
 * @returns a list with the results of applying the given function to each element of the input list.
 */

function map(list, myFunction) {
	if (isEmpty(list)) {
		return []
	} else {
		return cons(myFunction(first(list)), map(rest(list), myFunction))
	}
}

// Tests
// console.log(map([1, 2, 3, 4], (x) => x * x))
// console.log(map([{ a: "María" }, { a: "Carlos" }], (v) => "Hola " + v.a))


module.exports = {
	map
}
