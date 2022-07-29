// Vertex or Node
//Edge or connection
//if no arrow, it is bidirectional
// Adjacency Matrix
// Adjacency List
// {
//      A:["A","E"]
//      B:["A","C"]
//      C:["B","D"]
//      D:["C","D"]
//      E:["A","D"]
// add vertex is O(1)
// }
class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	// addVertex
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
			return true;
		}
		return false;
	}

	//addEdge
	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1].push(vertex2);
			this.adjacencyList[vertex2].push(vertex1);
			return true;
		}
		return false;
	}

	// Graphs are the go to data structure when you need to represent entities and the relationships between them:
	removeEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1] &&
				this.adjacencyList[vertex1].filter((v) => v !== vertex2);
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
				(v) => v !== vertex1
			);
			return true;
		}
		return false;
	}

	// Finding the vertex is O(1). However, you also have to remove all of the edges associated with the vertex you are removing.

	//A vertex is represented as a key in an object. Key lookup in an object is O(1).

	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return undefined;
		while (this.adjacencyList[vertex].length) {
			let temp = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, temp);
		}
		delete this.adjacencyList[vertex];
		return this;
	}
}
