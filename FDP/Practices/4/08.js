/**
 * Takes an input value and returns either the value plus 3 if it is a
 * number, or 3 if it is not a number.
 *
 * @param value - Any value.
 * @returns If the input value is not a number, it will return 3.
 * Otherwise, it will return the input value plus 3.
 */

function numberOrString(value) {
	if (value === true || value === false || isNaN(value)) {
		return 3
	} else {
		return value + 3
	}
}

// Tests
// console.log(numberOrString("hello"))
// console.log(numberOrString(true))
// console.log(numberOrString(3))
// console.log(numberOrString("khe"))
// console.log(numberOrString(10))
// console.log(numberOrString(false))
// console.log(numberOrString(1))
