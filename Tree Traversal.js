// Tree Traversal give an array back
// Breath First Search search from the top

// Depht first searh start from the bottom

class Node {
	constructor(value) {
		this.right = value;
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
		function travers(currentNode) {
			results.push(currentNode.value);
			if (currentNode.left) travers(currentNode.left);
			if (currentNode.right) travers(currentNode.right);
		}
		traverse(this.root);
		return results;
	}

	//in PostOrder we write the root of three in the array last

	DFSPPostOrder() {
		let results = [];
		function travers(currentNode) {
			if (currentNode.left) travers(currentNode.left);
			if (currentNode.right) travers(currentNode.right);
			results.push(currentNode.value);
		}
		traverse(this.root);
		return results;
	}

	//in InOrder we write the root of three in the array first
	//  DFS inorder lower to higher
	DFSInOrder() {
		let results = [];
		function travers(currentNode) {
			if (currentNode.left) travers(currentNode.left);
			results.push(currentNode.value);
			if (currentNode.right) travers(currentNode.right);
		}
		traverse(this.root);
		return results;
	}
}
