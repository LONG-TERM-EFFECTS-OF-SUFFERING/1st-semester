const { cons, first, rest, isEmpty, isList } = require("functional-light")
const { fibonacci } = require("../5/4")


/**
 * Returns a list of Fibonacci numbers up to a given number.
 *
 * @param number - The length of the Fibonacci list that you want to
 * generate.
 * @param [counter=0] - The counter parameter keeps track of the current position in the Fibonacci
 * sequence. It starts at 0 and increments by 1 with each recursive call to the fibonacciList function.
 * @returns An array of Fibonacci numbers up to the given number.
 */

function fibonacciList(number, counter = 0) {
	if (number < 0) {
		return "Invalid number"
	} else if (number == 0) {
		return []
	} else if (counter + 1 == number) {
		return [fibonacci(counter)]
	} else {
		return cons(fibonacci(counter), fibonacciList(number, counter + 1))
	}
}

// Tests
// console.log(fibonacciList(0))
// console.log(fibonacciList(1))
// console.log(fibonacciList(2))
// console.log(fibonacciList(3))
// console.log(fibonacciList(6))
