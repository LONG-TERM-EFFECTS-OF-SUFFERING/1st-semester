/**
 * Calculates the factorial of a given number.
 *
 * @param number - A number.
 * @returns the factorial of the given number.
 */

function factorial(number) {
	if (number < 0) {
		return "Invalid number"
	} else if (number <= 1) {
		return 1
	} else {
		return number * factorial(number - 1)
	}
}

// Tests
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(10))
// console.log(factorial(12))
// console.log(factorial(18))
