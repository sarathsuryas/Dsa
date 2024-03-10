class MinHeap {
  constructor(){
    this.heap = []
  }
  insert(value){
    this.heap.push(value)
    this.heapify()
  }
  heapify(){
    let child = this.heap.length-1
    while(0 < child){
      let parent = Math.floor(child/2)
      if(this.heap[child] < this.heap[parent]){
        let temp = this.heap[child]
        this.heap[child] = this.heap[parent]
        this.heap[parent] = temp
        child = parent
      }else return
    }
  }
  print(){
    console.log(this.heap)
  }

}

const heap = new MinHeap()
heap.insert(15)
heap.insert(5)
heap.insert(20)
heap.insert(1)
heap.insert(17)
heap.insert(10)
heap.insert(30)
heap.print()