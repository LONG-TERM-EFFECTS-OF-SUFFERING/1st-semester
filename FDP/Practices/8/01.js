const tree = {
	value: 5,
	left:  { value: 4 },
	right: { value: 6 }
}

/**
 * Returns the number of leaf nodes in a given tree.
 *
 * @param tree - A binary tree.
 * @returns the number of leaves in the tree.
 */

function leafT(tree) {
	if (!tree) { // null
		return 0
	} else if (!tree.value) { // { }
		return 0
	} else if (!tree.left && !tree.right) {
		return 1
	} else {
		return leafT(tree.left) + leafT(tree.right)
	}
}

// Tests
// console.log(leafT(null))
// console.log(leafT({ }))
// console.log(leafT({ value: 5 }))
// console.log(leafT({ value: 5, left: { value: 4 } }))
// console.log(leafT({ value: 5, right: { value: 6 } }))
// console.log(leafT(tree))
