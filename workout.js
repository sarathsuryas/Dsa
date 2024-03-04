class Node {
  constructor(value) {
    this.value = value
    this.children = []
  }
}

class Tree {
  constructor(){
    this.root = null
  }
  add(value , parentValue) {
    let node = new Node(value)
    if(this.root === null){
      this.root = node
    }else{
      let parentNode = this.find(parentValue)
      if(parentNode){
        parentNode.children.push(node)
      } else {
        console.error("Root node not found")
      }
    }
  }
  find(value) {
    const queue = [this.root]
    
    while(queue.length > 0){
      const currentNode = queue.shift()
      if(currentNode.value === value){
        return currentNode
      }
      for(const child of currentNode.children){
        queue.push(child)
      }
    }
    return null
  }
  remove(value){
    if(this.root === null){
      return
    }
    if(this.root.value === value){
      this.root = null
      return
    }
    const queue = [this.root]
       while (queue.length > 0) {
        const currentNode = queue.shift()
        for(let i = 0; i < currentNode.children.length; i++){
          if(currentNode.children[i].value === value){
            currentNode.children.splice(i , 1)
            return
          }
          queue.push(currentNode.children[i])
        }
       }
  }
  print(){
    let queue = [this.root]
    if(this.root === null){
      console.log("tree is empty")
      return
    }else {
      while(queue.length > 0){
        let currentNode = queue.shift()
        console.log(currentNode.value)
        for(const child of currentNode.children){
            queue.push(child)
        }
      }
    }
     
  }
}

const tree = new Tree();
tree.add(1);
tree.add(2, 1);
tree.add(3, 1);
tree.add(4, 2);
tree.add(5, 2);
tree.add(6, 3);
tree.remove(6)
tree.print();


