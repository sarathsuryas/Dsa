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
  bfs(startingVertex) {
    const visited = {}
    const result = []
    visited[startingVertex] = true
    const queue = [startingVertex]
    while(queue.length) {
        let currentVertex = queue.shift()
        result.push(currentVertex)
        this.adjacencyList[currentVertex].forEach((neighbour)=>{
            if(!visited[neighbour]) {
                visited[neighbour] = true
                queue.push(neighbour)
            }
        })
    }
    return result
}
dfs(startingVertex) {
  const visited = {}
  const result = []
  const depthFirst = (vertex) => {
      visited[vertex] = true
      result.push(vertex)
    this.adjacencyList[vertex].forEach((neighbor)=>{
      if(!visited[neighbor]) {
        depthFirst(neighbor)
      }
    })
  }
  depthFirst(startingVertex)
  return result
}

}

// Example usage:
const graph = new DirectedGraph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addEdge("A","B")
graph.addEdge("A","D")
graph.addEdge("A","E")
graph.addEdge("B","E")
graph.addEdge("B","C")
graph.addEdge("C","E")
graph.addEdge("C","F")
graph.addEdge("C","G")
graph.addEdge("D","E")
graph.addEdge("E","F")
graph.addEdge("G","F")
graph.display(); // Output: A->B B->C C->A
//console.log(graph.hasEdge("B", "C")); // Output: true
console.log(graph.bfs("A"))