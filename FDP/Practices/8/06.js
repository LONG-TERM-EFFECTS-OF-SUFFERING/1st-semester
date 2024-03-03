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
 * Returns a list of the even-valued nodes in a given tree.
 *
 * @param tree - A binary tree.
 * @returns a list of the values of the even nodes in the tree.
 */

function pairNodesList(tree) {
	if (!tree) {
		return []
	} else if (tree.value % 2 == 0 && tree.value != null) {
		const value = [tree.value]
		return value.concat(pairNodesList(tree.left).concat(pairNodesList(tree.right)))
	} else {
		return pairNodesList(tree.left).concat(pairNodesList(tree.right))
	}
}

// Test
console.log(pairNodesList(tree))
