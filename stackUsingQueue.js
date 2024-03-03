class Stack {
  constructor(){
    this.q1 = []
    this.q2 = []
  }
  push(value){
      this.q2.push(value)
      while(this.q1.length!==0){
        this.q2.push(this.q1.shift())
      }
      this.q = this.q1
      this.q1 = this.q2
      this.q2 = this.q
  }
  pop(){
    this.q1.shift()
  }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
console.log(stack.q1)
