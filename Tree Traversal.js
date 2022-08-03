// Tree Traversal give an array back
//Breath First Search start insertion in the array from from the top of the three

// Deep first search start insertion in the array from the bottom of the three

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
class BST {
	constructor() {
		this.root = null;
	}

	// Breath First Search search from the top
	BFS() {
		let currentNode = this.root;
		let queue = [];
		let results = [];
		queue.push(currentNode);

		while (queue.length) {
			currentNode = queue.shift();
			result.push(currentNode.value);
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}
		return results;
	}

	//left first from top
	//in PreOrder we write the root of three in the array first

	DFSPreOrder() {
		let results = [];
		function traverse(currentNode) {
			results.push(currentNode.value);
			if (currentNode.left) traverse(currentNode.left);
			if (currentNode.right) traverse(currentNode.right);
		}
		traverse(this.root);
		return results;
	}

	//in PostOrder we write the root of three in the array last

	DFSPPostOrder() {
		let results = [];
		function traverse(currentNode) {
			if (currentNode.left) traverse(currentNode.left);
			if (currentNode.right) traverse(currentNode.right);
			results.push(currentNode.value);
		}
		traverse(this.root);
		return results;
	}

	//in InOrder we write the root of three in the array first
	//  DFS in order lower to higher
	DFSInOrder() {
		let results = [];
		function traverse(currentNode) {
			if (currentNode.left) traverse(currentNode.left);
			results.push(currentNode.value);
			if (currentNode.right) traverse(currentNode.right);
		}
		traverse(this.root);
		return results;
	}
}
