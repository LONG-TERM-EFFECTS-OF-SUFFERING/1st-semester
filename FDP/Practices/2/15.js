/**
 * Returns true if both "boolean1" and "boolean2" are false, and false otherwise.
 *
 * @param boolean1 - A boolean value.
 * @param boolean2 - A boolean value.
 * @returns The negation of the logical AND operation between "boolean1"
 * and "boolean2".
 */

function noAND(boolean1, boolean2) {
	return !(boolean1 && boolean2)
}


/**
 * Returns true if either "boolean1" or "boolean2" is true.
 * Otherwise, it returns false.
 *
 * @param boolean1 - A boolean value.
 * @param boolean2 - A boolean value.
 * @returns the result of the logical OR operation between "boolean1" and "boolean2".
 */

function OR(boolean1, boolean2) {
	return boolean1 || boolean2
}


/**
 * Returns true if the two input booleans are different, but at least one of them is
 * true. Otherwise, it returns false.
 *
 * @param boolean1 - A boolean value.
 * @param boolean2 - A boolean value.
 * @returns the result of the logical XOR operation between "boolean1" and "boolean2".
 */

function XOR(boolean1, boolean2) {
	return noAND(boolean1, boolean2) && OR(boolean1, boolean2)
}

// Tests
// console.log(XOR(true, true))
// console.log(XOR(1, 1))
// console.log(XOR(0, 1))
