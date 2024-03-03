const tree = {
	value: 18,
	left: {
		value: 2,
		left: {
			value: 6,
			left: {
				value: 21,
			},
			right: {
				value: 5,
			},
		},
		right: {
			value: 3,
			left: {
				value: 15,
				left: {
					value: 24,
				},
				right: {
					value: null,
				},
			},
			right: {
				value: null,
			},
		},
	},
	right: {
		value: 3,
		left: {
			value: 7,
		},
		right: {
			value: 12,
			left: {
				value: 2,
			},
			right: {
				value: 3,
			},
		},
	}
}


/**
 * Returns the number of nodes in a tree that have even values.
 *
 * @param tree - A binary tree.
 * @returns the number of nodes in the tree that have even values.
 */

function pairNodes(tree) {
	if (!tree) {
		return 0
	} else if (tree.value % 2 == 0 && tree.value != null) {
		return 1 + pairNodes(tree.left) + pairNodes(tree.right)
	} else {
		return pairNodes(tree.left) + pairNodes(tree.right)
	}
}

// Test
console.log(pairNodes(tree))
