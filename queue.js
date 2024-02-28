class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }
  enqueue(value){
    const node = new Node(value)
    if(!this.first){
      this.first = node
      this.tail = node
    }else{
      this.tail.next = node
      this.tail = node
    }
  }
  dequeue(){
    let temp = this.first
    if(!this.first) return console.log("queue empty")
    if(this.first === this.last){
      this.last = null
    }
    this.first = this.first.next
    return temp.value
  }
  print(){
    let cur = this.first
    while(cur){
      console.log(cur.value)
      cur = cur.next
    }
  }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)


queue.print()
