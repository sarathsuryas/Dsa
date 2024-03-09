class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
  let index = this.heap.length-1
    while (0 < index) {
      let parent = Math.floor(index/2)
      if(this.heap[parent] < this.heap[index]){
        const temp = this.heap[parent];
        this.heap[parent] = this.heap[index];
        this.heap[index] = temp;
        index = parent
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
heap.printHeap();
