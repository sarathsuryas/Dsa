class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
  insert(data) {
    const newNode = new Node(data)
    if(this.root === null) {
        this.root = newNode
    } else {
        this.insertNode(this.root,newNode)
    }
  }
  insertNode(node,newNode) {
    if(newNode.data < node.data) {
        if(!node.left) {
            node.left = newNode
        } else {
            this.insertNode(node.left,newNode)
        }
    } else {
        if(!node.right) {
            node.right = newNode
        } else {
            this.insertNode(node.right,newNode)
        }
    }
  }
  isValidBst() {
    const inorderResult = []
    this.inorder(this.root,inorderResult) 
    
    for(let i = 0; i < inorderResult.length; i++) {
        if(inorderResult[i]>=inorderResult[i+1]) {
            return false;
        }
    }
    return true
  }
  inorder(root,result) {
    if(root) {
    this.inorder(root.left,result)
    result.push(root.data)
    this.inorder(root.right,result)
    }
  }
getHeight(node = this.root) {
    if(node === null) return 0
    const leftHeight = this.getHeight(node.left)
    const rightHeight = this.getHeight(node.right)
    return Math.max(leftHeight,rightHeight) + 1
}
}

const bst = new BST()

bst.insert(5)
bst.insert(3)
bst.insert(4)
bst.insert(15)
bst.insert(30)

console.log(bst.isValidBst());
console.log(bst.getHeight());