class circularQueue {
  constructor(size){
    this.queue = Array(size)
    this.size = size
    this.back = -1
    this.front = 0
    this.length = 0
  }
  isEmpty(){
    return this.length === 0
  }
  enqueue(value){
     if(this.size===this.length) return console.log("queue is full")
     this.back++
     this.queue[this.back % this.size] = value
     this.length++
  }
  dequeue(){
    if(this.isEmpty()) return console.log("queue is Empty") 
    this.queue[this.front] = null
    this.front++
    this.length--
  }
}

const queue = new circularQueue(2)
queue.enqueue(10)
queue.enqueue(20)
queue.dequeue()
queue.enqueue(11)
queue.dequeue()
console.log(queue.queue)