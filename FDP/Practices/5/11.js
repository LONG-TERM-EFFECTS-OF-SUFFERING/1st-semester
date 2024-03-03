/**
 * The MOD function calculates the modulus of two numbers, ensuring that the result is always positive.
 *
 * @param a - The dividend or number being divided.
 * @param b - The divisor in the modulo operation. It is the number by
 * which the dividend (parameter "a") is divided to find the remainder.
 * @returns the modulus (remainder) of the division of "a" by "b".
 */

function MOD(a, b) {
	if (a < 0) { // A residue can't be negative
		return MOD(a + b, b)
	} else if (0 <= a && a < b) { // "b" can't rest "a" anymore
		return a
	} else {
		return MOD(a - b, b)
	}
}

// Test
// console.log(MOD(-10, 8))


/**
 * The function calculates the greatest common divisor (GCD) of two numbers using Euler's algorithm.
 *
 * @param a - A int positive number
 * @param b - A int positive number
 * @returns the greatest common divisor (MCD) of the two input numbers, "a" and "b".
 */

function MCD(a, b) { // Euler's algorithm
	if (b == 0) {
		return a
	} else {
		return MCD(b, MOD(a, b)) // MCD(a, b) = MCD(a, (a - xb))
		// x being a natural number
	}
}

// Tests
// console.log(MCD(10, 8))
// console.log(MCD(25, 45))
// console.log(MCD(110, 180))
