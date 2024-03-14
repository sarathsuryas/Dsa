class DirectedGraph {
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set()
    }
  }
  addEdge(fromVertex, toVertex) {
    if(this.adjacencyList[fromVertex] && this.adjacencyList[toVertex]) {
      this.adjacencyList[fromVertex].add(toVertex);
    }
  }
  display() {
    for (let vertex in this.adjacencyList) {
      for (let neighbor of this.adjacencyList[vertex]) {
        console.log(vertex + "->" + neighbor);
      }
    }
  }
  hasEdge(fromVertex, toVertex) {
    return this.adjacencyList[fromVertex] && this.adjacencyList[fromVertex].has(toVertex);
  }
  removeEdge(fromVertex, toVertex) {
    if(this.adjacencyList[fromVertex] && this.adjacencyList[toVertex]) {
      this.adjacencyList[fromVertex].delete(toVertex);
    }
  }
  removeVertex(vertex) {
    if(!this.adjacencyList[vertex]){
      return
    }
    for(let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

// Example usage:
const graph = new DirectedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A"); // Example of a directed edge
graph.display(); // Output: A->B B->C C->A
console.log(graph.hasEdge("B", "C")); // Output: true
