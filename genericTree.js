class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
       // 6,3
  add(value, parentValue) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      const parentNode = this.find(parentValue);

      if (parentNode) {
        parentNode.children.push(newNode);
      } else {
        console.error(`Parent with value ${parentValue} not found. Could not add node.`);
      }
    }
  }

  find(value) {
    const queue = [this.root];
    
    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode.value === value) {
        return currentNode;
      }

      for (const child of currentNode.children) {
        queue.push(child);
      }
    }

    return null;
  }

  remove(value) {
    if (this.root === null) {
      return;
    }

    if (this.root.value === value) {
      this.root = null;
      return;
    }

    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      for (let i = 0; i < currentNode.children.length; i++) {
        if (currentNode.children[i].value === value) {
          currentNode.children.splice(i, 1);
          return;
        }
        queue.push(currentNode.children[i]);
      }
    }
    console.log("value not available")
  }

  print() {
    if (this.root === null) {
      console.log('Tree is empty.');
      return;
    }

    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      console.log(currentNode.value);

      for (const child of currentNode.children) {
        queue.push(child);
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
tree.remove(0)
tree.print();
