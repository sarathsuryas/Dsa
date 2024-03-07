class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertRecursively(this.root, newNode);
    }
  }
                      
  insertRecursively(currentNode, newNode) {
    if (newNode.data < currentNode.data) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.insertRecursively(currentNode.left, newNode);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insertRecursively(currentNode.right, newNode);
      }
    }
  }

  search(data) {
    return this.searchRecursively(this.root, data);
  }

  searchRecursively(node, data) {
    if (!node) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this.searchRecursively(node.left, data);
    } else {
      return this.searchRecursively(node.right, data);
    }
  }

  inorderTraversal() {
    const result = [];
    this.inorderTraversalRecursively(this.root, result);
    return result;
  }

  inorderTraversalRecursively(node, result) {
    
    if (node) {
      this.inorderTraversalRecursively(node.left, result);
      result.push(node.data);
      this.inorderTraversalRecursively(node.right, result);
    }
  }
}

// Example usage:

const binaryTree = new BinaryTree();

binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
console.log("Inorder Traversal:", binaryTree.inorderTraversal());

// console.log("Search for 7:", binaryTree.search(7)); // Should return true
// console.log("Search for 12:", binaryTree.search(12)); // Should return false


