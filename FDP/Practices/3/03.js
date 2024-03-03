/**
 * Returns the three numbers taken as input in descending order.
 *
 * @param number1 - A number.
 * @param number2 - A number.
 * @param number3 - A number.
 * @returns a string that represents the sorted numbers in descending order.
 */

function sort(number1, number2, number3) {
	let output = ""

	if (number3 > number2 && number3 > number1) {
		output += number3 + " "
			if (number1 > number2) {
				output += number1 + " " + number2
			} else {
				output += number2 + " " + number1
			}
	} else if (number2 > number3 && number2 > number1) {
		output += number2 + " "
		if (number3 > number1) {
			output += number3 + " " + number2
		} else {
			output += number1 + " " + number3
		}
	} else { // number1 > number2 && number1 > number3 and equals numbers
		output += number1 + " "
		if (number2 > number3) {
			output += number2 + " " + number3
		} else {
			output += number3 + " " + number2
		}
	}
	return output
}

// Tests
// console.log(sort(4, 12, -12))
// console.log(sort(1782, 3999, 8523))
// console.log(sort(0, -3, -9))
