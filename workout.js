class Node {
  constructor(value) {
    this.value = value
    this.left = null 
    this.right = null
  }
}

class Bst {
  constructor () {
    this.root = null
  }
  insert(value){
    let newNode = new Node(value)
    return this.insertNode(this.root,newNode)
  }
  insertNode(currentNode,newNode){
    if(currentNode === null){
      currentNode.value = newNode.value
      return
    }
    if(currentNode.value > newNode.value){
      if(!currentNode.right){
        currentNode.left = newNode
      }else {
        this.insertNode(currentNode.right,newNode)
      }
    } else {
      if(!currentNode.right){
        currentNode.right = newNode
      }else {
        this.insertNode(currentNode.left,newNode)
      }
    }
  }
  postOrder(root) {
    console.log(root.value)
    this.postOrder(root.left)
    this.postOrder(root.right)
  }
  
}