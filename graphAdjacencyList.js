class Graph {
  constructor() {
   this.adjacencyList = {}
  }
  addVertex(vertex) {
   if(!this.adjacencyList[vertex]) {
     this.adjacencyList[vertex] = new Set()
   }
  }
  addEdge(vertex1,vertex2) {
     if(!this.adjacencyList[vertex1]){
       this.addVertex(vertex1)
     }
     if(!this.adjacencyList[vertex2]) {
       this.addVertex(vertex2)
     }
     this.adjacencyList[vertex1].add(vertex2)
     this.adjacencyList[vertex2].add(vertex1)
  }
  display() {
   for (let vertex in this.adjacencyList) {
     console.log(vertex + "->" + [...this.adjacencyList[vertex]])
   }
  }
  Bfs(startingVertex){
     const visited = {}
     const queue = [startingVertex]
     const result = []
     visited[startingVertex] = true
     while(queue.length) {
      const currentVertex = queue.shift()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach(neighbour => {
           if(!visited[neighbour]){
            visited[neighbour] = true
            queue.push(neighbour)
           }
      });
     }
     return result
  }
  dfs(startingVertex) {
    const visited = {}
    const result = []
    const depthFirst = (vertex) => {
      visited[vertex] = true
      result.push(vertex)
       this.adjacencyList[vertex].forEach((neighbour)=> {
           if(!visited[neighbour]) {
             depthFirst(neighbour)
           }
       })
    }
    depthFirst(startingVertex)

    return result
  }
  hasEdge(vertex1,vertex2) {
     return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
  }
  removeEdge(vertex1,vertex2) {
      this.adjacencyList[vertex1].delete(vertex2)
      this.adjacencyList[vertex2].delete(vertex1)
  }
  removeVertex(vertex) {
   if(!this.adjacencyList[vertex]){
     return
   }
   for(let adjacentVertex of this.adjacencyList[vertex]) {
     this.removeEdge(adjacentVertex,vertex)
   }
   delete this.adjacencyList[vertex]
  }
 }
 
 const graph = new Graph()
 
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
 graph.addEdge("F","E")
 graph.addEdge("G","F")
 
 //console.log(graph.hasEdge("A","B"))
 //graph.removeVertex("A")
 graph.display()
 console.log(graph.dfs("A"))