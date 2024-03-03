
/**
 * Checks if a given year is a leap year or not.
 *
 * @param year - A positive integer.
 * @returns A boolean value. It returns true if the given year is a leap year, and false otherwise.
 */

function isLeapYear(year) {
	if (year % 4 == 0 && year % 100 != 0) {
		return true
	} else if (year % 400 == 0) {
		return true
	} else {
		return false
	}
}

// Tests
// console.log(isLeapYear(2004))
// console.log(isLeapYear(2028))
// console.log(isLeapYear(2021))
// console.log(isLeapYear(2016))
// console.log(isLeapYear(2020))
// console.log(isLeapYear(2032))
// console.log(isLeapYear(2007))
// console.log(isLeapYear(2012))
// console.log(isLeapYear(2036))
