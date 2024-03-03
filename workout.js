class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Stack {
    constructor(){
      this.head = null
    }
  push(value){
  let node = new Node(value)
  if(!this.head){
    this.head = node
    return
  }
   let temp = this.head
   this.head = node
   this.head.next = temp
  }
}