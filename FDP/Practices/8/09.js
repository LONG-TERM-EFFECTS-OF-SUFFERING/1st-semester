const { tree, treeOne } = require("./Trees")


/**
 * Takes a binary tree as input and returns a list representing the
 * preorder traversal of the tree.
 *
 * @param tree - A binary tree.
 * @returns a list that represents the preorder traversal of the binary tree.
 */

function preorderList(tree) { // value - left tree - right tree
	if (!tree) {
		return []
	} else if (!tree.left && !tree.left) {
		return [tree.value]
	} else {
		return [tree.value].concat(preorderList(tree.left).concat(preorderList(tree.right)))
	}
}

// Tests
// console.log(preorderList(tree))
// console.log(preorderList(treeOne))
