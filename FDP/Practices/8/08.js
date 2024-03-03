const tree = {
	value: 8,
	left: {
		value: 5,
		left: {
			value: 3,
		},
		right: {
			value: 6,
		},
	},
	right: {
		value: 10,
		left: null,
		right: {
			value: 12,
		},
	}
}


const treeOne = {
	value: 5,
	left: {
		value: 2,
		left: {
			value: 1,
		},
		right: {
			value: 7,
		},
	},
	right: {
		value: 7,
		left: {
			value: 6,
		},
		right: null,
	}
}


/**
 * Checks if a given element is present in the values of a given tree.
 *
 * @param tree - A binary tree in which we want to search for the element.
 * @param element - The element that you want to search for in the tree.
 * @returns a boolean value indicating whether the element is present in the tree or not.
 */

function valueSearch(tree, element) {
	if (!tree) {
		return false
	} else if (tree.value === element) {
		return true
	} else {
		return valueSearch(tree.left, element) || valueSearch(tree.right, element)
	}
}

// Tests
// console.log(valueSearch(tree, 12))
// console.log(valueSearch(tree, 8))
// console.log(valueSearch(tree, 0))
// console.log(valueSearch(treeOne, 2))
// console.log(valueSearch(treeOne, 1))
// console.log(valueSearch(treeOne, 4))
