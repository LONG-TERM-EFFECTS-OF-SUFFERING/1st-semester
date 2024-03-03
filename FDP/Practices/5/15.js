/**
 * Returns the inverted version of the word taken as input.
 *
 * @param word - A word that we want to invert.
 * @returns the inverted version of the input word.
 */

function invertWord(word) {
	if (word.length == 1) {
		return word
	} else {
		return invertWord(word.substring(1)) + word.charAt(0)
	}
}


/**
 * Checks if a word is a palindrome by comparing it to its inverted version.
 *
 * @param word - A word.
 * @returns A boolean value indicating whether the given word is a palindrome or not.
 */

function palindrome(word) {
	return word == invertWord(word)
}

// Tests
// console.log(palindrome("ala"))
// console.log(palindrome("alambrala"))
// console.log(palindrome("reconocer"))
