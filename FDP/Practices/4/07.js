/**
 * Checks if a given number falls in (-5, -2], (5, 6] or (7, 10).
 *
 * @param number - A number.
 * @returns a boolean value indicating whether the input number falls within one of the specified
 * intervals.
 */

function interval(number) {
	return (-5 < number && number <= -2) || (7 < number && number < 10) || (5 < number && number <= 6)
}

// Tests
// console.log(interval(-5))
// console.log(interval(-2))
// console.log(interval(5))
