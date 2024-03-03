/**
 * Adds a new value to a binary tree.
 *
 * @param tree - A binary search tree.
 * @param value - the value that we want to add to the tree.
 * @returns a new tree with the value added (in a node).
 */

function addValue(tree, value) {
	if (tree == null) {
		return {value: value, left: null, right: null}
	} else {
		if (value <= tree.value) {
			return {value: tree.value, left: addValue(tree.left, value), right: tree.right}
		} else {
			return {value: tree.value, left: tree.left, right: addValue(tree.right, value)}
		}
	}
}


/**
 * Recursively generates a tree structure from a given list of values.
 *
 * @param list - An array that contains the values to be added to the tree.
 * @param [tree=null] - The current state of the tree being generated.
 * @returns the final tree structure that is generated from the given list.
 */

function treeGenerator(list, tree = null) {
	if (list.length == 0) {
		return tree
	} else {
		return treeGenerator(list.slice(1), addValue(tree, list[0]))
	}
}

console.log(JSON.stringify(treeGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
