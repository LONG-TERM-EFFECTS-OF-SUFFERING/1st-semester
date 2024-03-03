/**
 * Checks if a given number is prime by recursively dividing it by increasing dividers.
 *
 * @param number - A int number.
 * @param [divider=2] - The "divider" parameter is used to check if the "number" is divisible by any
 * number other than 1 and itself. It starts with a default value of 2 and is incremented by 1 in each
 * recursive call until it reaches half of the "number".
 * @returns A boolean value. It returns true if the given number is a
 * prime number, and false if it is not.
 */

function isPrime(number, divider = 2) {
	if (number / 2 < divider) {
		return true
	} else if (number % divider == 0) {
		return false
	} else {
		return isPrime(number, divider + 1)
	}
}

// Tests
// console.log(isPrime(2))
// console.log(isPrime(12000))
// console.log(isPrime(853))
// console.log(isPrime(997))
// console.log(isPrime(11))
