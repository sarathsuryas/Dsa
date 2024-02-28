
// stack implementation by using array

// class Stack{
//   constructor(){
//     this.item = []
//   }
//   push(value){
//     this.item.push(value)
//   }
//   pop(){
//     if(this.item.length === 0) return undefined
//     return this.item.pop()
//   }
//   peek(){
//     return this.item[this.item.length-1]
//   }

//   print(){
//     if(this.item.length === 0) {
//      return console.log('array is empty')
//     }
//     console.log(this.item)
//   }
// }

// const stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.pop()
// stack.pop()
// stack.print()


// stack implementation by using linked list

class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(){
    this.first = null
    this.size = 0
  }
   
  push(value){
    const node = new Node(value)
     if(!this.first){
      this.first = node
      this.last = node
     }else{
      let temp = this.first
      this.first = node
      this.first.next = temp
     }
     
  }
  pop(){
    if(!this.first) return console.log('stack empty')
    var temp = this.first
    if(this.first === this.last){
      this.last === null
    }
     this.first = this.first.next
     this.size--
  }
  peek(){
    console.log(this.first.value)
  }

  print(){
    if(this.isEmpty()){
      console.log("stack empty");
    }
   let curr = this.first
    while(curr){
      console.log(curr.value)
      curr = curr.next
    }
  }
  isEmpty(){
    return this.size===0
  }
}

const  stack = new Stack()






stack.print()