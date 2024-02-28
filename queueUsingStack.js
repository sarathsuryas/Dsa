class Queue {
  constructor(){
    this.stack1 = []
    this.stack2 = []
  }
  enQueue(value){
  while(this.stack1.length !=0){
    this.stack2.push(this.stack1.pop())
  }
  this.stack1.push(value)
  while(this.stack2.length !==0){
    this.stack1.push(this.stack2.pop())
  }
  }
  dequeue(){
    this.stack1.pop()
  }
}

const queue = new Queue()
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
queue.enQueue(5)
queue.enQueue(6)
console.log(queue)