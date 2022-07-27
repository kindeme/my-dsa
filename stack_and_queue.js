// Stack
// When using array for a stack always unshift90 and pop()
// for linkedList from the begining O(1)
//this used linkedlist

//create a new node
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		const newNode = new Node(value);
		this.top = newNode;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.top = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		let temp = this.top;
		this.top = this.top.next;
		temp.next = null;
		this.length--;
		return temp;
	}
}

// Queue
// used shift and unshift because they are O(1) in linkedlist

class Queue {
	constructor(value) {
		const newNode = new Node(value);
		this.first = newNode;
		this.last = newNode;
		this.length = 1;
	}

	enqueue(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}

	dequeue() {
		if (this.length === 0) return undefined;
		let temp = this.first;
		if (this.length === 1) {
			this.last = null;
		} else {
			this.first = this.first.next;
			temp.next = null;
		}
		this.length--;
		return temp;
	}
}
