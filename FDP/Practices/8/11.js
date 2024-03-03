const { tree, treeOne } = require("./Trees")


/**
 * Takes a binary tree as input and returns a list containing the elements
 * of the tree in postorder traversal.
 *
 * @param tree - A binary tree.
 * @returns a list that represents the postorder traversal of the binary tree.
 */

function postorderList(tree) { // left tree - right tree - value
	if (!tree) {
		return []
	} else if (!tree.left && !tree.left) {
		return [tree.value]
	} else {
		return postorderList(tree.left).concat(postorderList(tree.right).concat([tree.value]))
	}
}

// Tests
// console.log(postorderList(tree))
// console.log(postorderList(treeOne))
