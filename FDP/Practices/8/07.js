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
 * Returns the depth (the longest path from the root to a leaf) of the given tree.
 *
 * @param tree - A binary tree.
 * @returns the depth (the longest path from the root to a leaf) of the tree.
 */

function treeDeep(tree) {
	if (!tree) {
		return 0
	} else if (tree.left || tree.right) {
		return 1 + Math.max(treeDeep(tree.left), treeDeep(tree.right))
	} else {
		return 1
	}
}

// Test
console.log(treeDeep(tree))
