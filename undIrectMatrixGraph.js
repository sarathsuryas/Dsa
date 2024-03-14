class UndirectedGraph {
  constructor(numVertices) {
      this.numVertices = numVertices;
      this.adjMatrix = [];
  for (let i = 0; i < numVertices; i++) {
        this.adjMatrix[i] = [];
  for (let j = 0; j < numVertices; j++) {
          this.adjMatrix[i][j] = 0;
      }
}

      
  }
   
  addEdge(vertex1, vertex2) {
      if (vertex1 >= 0 && vertex1 < this.numVertices && vertex2 >= 0 && vertex2 < this.numVertices) {
          // For undirected graph, set both vertices to 1
          this.adjMatrix[vertex1][vertex2] = 1;
          this.adjMatrix[vertex2][vertex1] = 1;
      }
  }

  removeEdge(vertex1, vertex2) {
      if (vertex1 >= 0 && vertex1 < this.numVertices && vertex2 >= 0 && vertex2 < this.numVertices) {
          // For undirected graph, remove connection from both vertices
          this.adjMatrix[vertex1][vertex2] = 0;
          this.adjMatrix[vertex2][vertex1] = 0;
      }
  }

  display() {
      for (let row of this.adjMatrix) {
          console.log(row.join(' '));
      }
  }
}

// Example usage:
const numVertices = 5;
const graph = new UndirectedGraph(numVertices);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log("Adjacency Matrix:");
graph.display();
