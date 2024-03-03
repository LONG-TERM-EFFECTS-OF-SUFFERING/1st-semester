const tree = {
	value: 5,
	left:  { value: 4 },
	right: { value: 6 }
}


/**
 * Returns the number of internal nodes in a given tree.
 *
 * @param tree - A binary tree.
 * @returns the number of internal nodes in the given tree.
 */

function internalNodes(tree) {
	/**
	 * Returns the number of internal nodes plus one (the root) in a given tree.
	 *
	 * @param tree - A binary tree.
	 * @returns the number of internal nodes in the given tree.
	 */

	function aux(tree) {
		if (!tree) {
			return 0
		} else if (!tree.left && !tree.right) {
			return 0
		} else {
			return 1 + aux(tree.right) + aux(tree.left)
		}
	}

	if (!tree || !tree.value) { // { } or null
		return 0
	} else {
		return aux(tree) - 1
	}
}

// Tests
// console.log(internalNodes(null))
// console.log(internalNodes({ }))
// console.log(internalNodes({ value: 5, left: { value: 5, left: { value: 4 }, right: { value: 6 } }, right: { value: 6 } }))
// console.log(internalNodes({ value: 5, right: { value: 6 } }))
// console.log(internalNodes({ value: 5, right: { value: 6 } }))
// console.log(internalNodes(tree))
