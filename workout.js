class DirectedGraph {
    constructor() {
        this.adjacencyList = {}
    }
  insertVertex(vertex) {
    if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = new Set()
    }
  }
  addEdge(fromVertex,toVertex) {
    if(!this.vertex[fromVertex]){
        this.adjacencyList[fromVertex] = new Set()
    }
    if(!this.vertex[toVertex]){
        this.adjacencyList[toVertex] = new Set()
    }
    this.adjacencyList[fromVertex].add(toVertex)
  }

  bfs(startingVertex) {
    const queue = []
    const visited = {}
    visited[startingVertex] = true
    queue.push(startingVertex)
    while(queue.length) {
        if(!visited[startingVertex]) {
            this.adjacencyList[v]
        }
    }
  }
   
}