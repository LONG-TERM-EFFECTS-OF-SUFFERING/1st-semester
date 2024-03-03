const { tree, treeOne } = require("./Trees")


/**
 * Takes a binary tree as input and returns a list of its elements in inorder traversal.
 *
 * @param tree - A binary tree.
 * @returns a list containing the values of the binary tree in inorder traversal.
 */

function inorderList(tree) { // left tree - value - right tree
	if (!tree) {
		return []
	} else if (!tree.left && !tree.left) {
		return [tree.value]
	} else {
		return inorderList(tree.left).concat([tree.value].concat(inorderList(tree.right)))
	}
}

// Tests
// console.log(inorderList(tree))
// console.log(inorderList(treeOne))
