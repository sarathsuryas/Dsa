class DirectedGraph {
  constructor(numMatrix) {
    this.numMatrix = numMatrix
    this.adjMatrix = []
    for(let i = 0; i < numMatrix; i++) {
      this.adjMatrix[i] = []
      for(let j = 0; j < numMatrix; j++) {
        this.adjMatrix[i][j] = 0
      }
    }
  }
  addEdge(fromVertex,toVertex) {
    if(fromVertex >=0 && this.numMatrix > fromVertex && toVertex >=0 && this.numMatrix > toVertex) {
      this.adjMatrix[fromVertex][toVertex] = 1
    }
  }
  removeEdge(fromVertex,toVertex) {
    if(fromVertex >=0 && this.numMatrix > fromVertex && toVertex >=0 && this.numMatrix > toVertex) {
      this.adjMatrix[fromVertex][toVertex] = 0
    }
  }
  display() {
    console.log(this.adjMatrix)
  }

}

const graph = new DirectedGraph(5)

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.removeEdge(2,4)
console.log("Adjacency Matrix:");
graph.display();
