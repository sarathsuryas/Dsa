class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
   this.maxHeapify()
  } 
  maxHeapify(){
    let child = this.heap.length-1
    
    while(child > 0) {
      let parent = Math.floor(child/2)
      if(this.heap[child] > this.heap[parent]){
        let temp = this.heap[parent]
        this.heap[parent] = this.heap[child]
        this.heap[child] = temp
        child = parent
      }else{
        return
      }
    }
  }
   

  printHeap() {
    console.log(this.heap);
  }
}

// Example usage:
const heap = new MaxHeap();
heap.insert(10);
heap.insert(15);
heap.insert(30);
heap.insert(40);
heap.insert(9)
heap.insert(41)
heap.insert(100)

heap.printHeap();
