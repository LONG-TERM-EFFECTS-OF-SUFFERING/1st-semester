/**
 * Calculates the Fibonacci number at a given position.
 *
 * @param position - A int number.
 * @returns the Fibonacci number at the given position.
 */

function fibonacci(position) {
	if (position < 0) {
		return "Invalid position"
	} else if (position <= 2) {
		return 1
	} else {
		return fibonacci(position - 1) + fibonacci(position - 2)
	}
}

// Tests
// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(9))
// console.log(fibonacci(15))


module.exports = {
	fibonacci
}