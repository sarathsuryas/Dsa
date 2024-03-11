class MaxHeap {
  constructor(){
    this.heap = []
  }
  insert(value) {
    this.heap.push(value)
  }
  heapSort(){
    for(let i = Math.floor((this.heap.length)/2)-1; i >=0 ; i--){
      this.maxHeapify(this.heap,i,this.heap.length)
    }
    for(let i = this.heap.length-1; i > 0; i--){
      this.swap(0,i)
      this.maxHeapify(this.heap,0,i)
    }
  }
  maxHeapify(heap,i,n){
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    if(left < n && heap[largest] < heap [left]){
      largest = left
    } 
    if(right < n && heap[largest] < heap[right]){
      largest = right
    }
    if(i!==largest){
      this.swap(largest,i)
      this.maxHeapify(heap,largest,n)
    }
  }
   swap(index1,index2) {
     let temp = this.heap[index1]
     this.heap[index1] = this.heap[index2]
     this.heap[index2] = temp
   }
   printHeap(){
    console.log(this.heap)
   }
}

const heap = new MaxHeap();
heap.insert(15);
heap.insert(5);
heap.insert(20);
heap.insert(1);
heap.insert(17);
heap.insert(10);
heap.insert(30);
heap.heapSort()

heap.printHeap();
