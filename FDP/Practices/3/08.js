/**
 * Returns the inverted version of the number taken as input by reversing the order of its digits.
 *
 * @param number - A number.
 * @returns the inverted form of the input number.
 */

function invert(number) {
	if (number >= 100 && number <= 999) {
		// Example with 243
		const firstDigit = Math.trunc(number / 100) // Math.trunc(2.43)
		const secondDigit = Math.trunc(number / 10 - firstDigit * 10) // Math.trunc(23.4 - 2 * 10)
		const thirdDigit = number - firstDigit * 100 - secondDigit * 10 // Math.trunc(234 - 2 * 100 - 3 * 10)

		return thirdDigit + "" + secondDigit + "" + firstDigit
	} else if (number > 999 && number <= 9999) {
		const firstDigit = Math.trunc(number / 1000)
		const secondDigit = Math.trunc(number / 100 - firstDigit * 10)
		const thirdDigit = Math.trunc(number / 10 - firstDigit * 100 - secondDigit * 10)
		const fourthDigit = number - firstDigit * 1000 - secondDigit * 100 - thirdDigit * 10

		return fourthDigit + "" + thirdDigit + "" + secondDigit + "" + firstDigit
	} else if (number > 9999 && number <= 99999) {
		const firstDigit = Math.trunc(number / 10000)
		const secondDigit = Math.trunc(number / 1000 - firstDigit * 10)
		const thirdDigit = Math.trunc(number / 100 - firstDigit * 100 - secondDigit * 10)
		const fourthDigit = Math.trunc(number / 10 - firstDigit * 1000 - secondDigit * 100 - thirdDigit * 10)
		const fifthDigit = number - firstDigit * 10000 - secondDigit * 1000 - thirdDigit * 100 - fourthDigit * 10

		return fifthDigit + "" + fourthDigit + "" + thirdDigit + "" + secondDigit + "" + firstDigit
	} else {
		return "You have NOT entered a number"
	}
}

// Tests
// console.log(invert(342))
// console.log(invert(7349))
// console.log(invert(20126))
