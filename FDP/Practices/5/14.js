/**
 * Calculates the number of characters in a given string recursively.
 *
 * @param string - A string.
 * @returns the number of characters in the given string.
 */

function charactersNumber(string) {
	if (string.slice(1) == "") {
		return 1
	} else {
		return 1 + charactersNumber(string.slice(1))
	}
}

// Tests
// console.log(charactersNumber("Hola mundo"))
// console.log(charactersNumber("la programación hace un mejor mundo"))
