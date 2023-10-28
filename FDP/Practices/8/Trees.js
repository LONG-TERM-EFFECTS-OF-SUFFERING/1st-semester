const tree = {
	value: 6,
	left: {
		value: 3,
		left: {
			value: 1,
		},
		right: {
			value: 5,
			left: {
				value: 4,
			},
		},
	},
	right: {
		value: 9,
		left: {
			value: 8,
		},
		right: {
			value: 13,
			left: {
				value: 11,
				left: {
					value: 10,
				},
				right: {
					value: 12,
				},
			},
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
			value: 3,
		},
	},
	right: {
		value: 7,
		left: {
			value: 6,
		},
	}
}

module.exports = {
	tree,
	treeOne
}