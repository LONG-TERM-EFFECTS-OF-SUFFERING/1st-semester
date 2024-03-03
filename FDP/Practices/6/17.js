const { cons, first, rest, isEmpty, isList } = require("functional-light")

/**
 * Takes a list, a function, and an initial accumulated value, and returns the
 * result of applying the function to each element of the list.
 *
 * @param list - An array.
 * @param myFunction - A function that takes two arguments: the current element of the list and the
 * accumulated value. It performs some operation on these two values and returns the result.
 * @param accumulatedValue - The accumulated value is the initial value that will be used in the
 * reduction process. It represents the accumulated result of applying the function to each element of
 * the list.
 * @returns the value result after executing a reducer function on each element of the input list.
 */

function reduce(list, myFunction, accumulatedValue) {
	if (isEmpty(list)) {
		return accumulatedValue
	} else {
		return reduce(rest(list), myFunction, myFunction(first(list), accumulatedValue))
	}
}

// Tests
// console.log(reduce([1, 2, 3, 4, 5], (val, accum) => accum + val, 0))
// console.log(reduce([1, 2, 3, 4, 5], (val, accum) => accum * val, 1))
// console.log(reduce([1, 7, 3, 14, 5], (val, accum) => Math.max(val, accum), 0))
// console.log(reduce([1, 7, 3, 14, 5], (val, accum) => Math.min(val, accum), 9999))
// console.log(reduce([{ a: "María" }, { a: "Carlos" }], (val, acum) => acum + "-" + val.a, ""))
