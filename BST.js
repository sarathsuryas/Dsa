class Node {
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
    constructor (){
      this.root = null
    }
  insert(value){
    const newNode = new Node(value)
    if(this.root === null) {
      this.root = newNode
    }else{
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node,newNode){
    if(newNode.data < node.data){
      if(!node.left){
        node.left = newNode
      } else {
        this.insertNode(node.left , newNode)
      }
    } else {
      if(!node.right){
        node.right = newNode
      }else {
        this.insertNode(node.right,newNode)
      }
    }
  }
  search(data) {
    return this.searchNode(this.root,data)
  }
  searchNode(node,data){
     if(!node){
      return false
     }
     else if (node.data === data){
      return true
     }else if(data < node.data){
       return this.searchNode(node.left,data)
     }else if(data > node.data) {
      return this.searchNode(node.right,data)
     }
  }

  preorder(root){
   
    if(root){
      console.log(root.data)
      this.preorder(root.left)
      this.preorder(root.right)
    }
  }
  postorder(root){
    if(root){
      this.preorder(root.left)
      this.preorder(root.right)
      console.log(root.data)
    }
  }

  isValidBST() {
    const inorderValues = [];
    this.inorder(this.root, inorderValues);
    
    // Check if the inorder traversal result is sorted
    for (let i = 0; i < inorderValues.length; i++) {
      if (inorderValues[i] >= inorderValues[i + 1]) {
        return false;
      }
    }
    return true;
  }

  inorder(root, result) {
    if (root) {
      this.inorder(root.left, result);
      result.push(root.data);
      this.inorder(root.right, result);
    }
  }
  

}

const bst = new BinarySearchTree()

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7); 
console.log(bst.isValidBST()); 
//console.log(bst.search(3))



