// a linkedlist is a trees doest fork
// A full Tree either item point to two nodes or zero node
//Perfect tree entire line is fill
// Complete tree
//Parent node
//Children =>siblins nodes a node can only have one parent
// anode doesn't have a children is a leave node

// Binary Search tree
//if node is greater than parent it goes right if less it goes to left
// Birnary search Big O  best possible O(log n) worst is O(n)
// Binary Trees is better forlookup(), insert() and remove() because they are O(log n)
// linkedlist is better for  insert  becauseit is O(1)

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

	// Insert Pseudocode
	//1-  Create newNode
	//if root == null then root = newNode
	// let temp = this.root
	//Whille lopp
	//if newNode === temp return undefined
	// if < left else > right
	// if null insert newNode else move to next
	//for duplicate node add count the node and increment that
	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let temp = this.root;
		while (true) {
			if (newNode.value === temp.value) return undefined; //to avoid duplicate value
			if (newNode.value < temp.value) {
				if (temp.left === null) {
					temp.left = newNode;
					return this;
				}

				temp = temp.left;
			} else {
				if (temp.right === null) {
					temp.right = newNode;
					return this;
				}
				temp = temp.right;
			}
		}
	}

	//constains Pseudocode
	// if root === null return false
	//let temp = this.root
	//while(temp)
	//if < left
	//else if > right
	//return false

	contains(value) {
		if (this.root === null) return false;
		let temp = this.root;
		while (temp) {
			if (value < temp.value) {
				temp = temp.left;
			} else if (value > temp.value) {
				temp = temp.right;
			} else {
				return true;
			}
		}
		return false;
	}

	// MInimum value
	minValueNode(currentNode) {
		while (currentNode.left != null) {
			currentNode = currentNode.left;
		}
		return currentNode;
	}
}

let myTree = new BST();
myTree;
