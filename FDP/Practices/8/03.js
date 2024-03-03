const tree = {
	value: 5,
	left:  { value: 4 },
	right: { value: 6 }
}


/**
 * Returns a list of the leaf nodes in a given tree.
 *
 * @param tree - A binary tree.
 * @returns a list of the leaf nodes in the tree.
 */

function leafList(tree) {
	if (!tree) {
		return []
	} else if (!tree.value) {
		return []
	} else if (!tree.left && !tree.right) {
		return [tree.value]
	} else {
		return leafList(tree.left).concat(leafList(tree.right))
	}
}

// Tests
// console.log(leafList(null))
// console.log(leafList([]))
// console.log(leafList({ value: 5 }))
// console.log(leafList({ value: 5, left: { value: 4 } }))
// console.log(leafList({ value: 5, right: { value: 6 } }))
// console.log(leafList(tree))
