class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // Primary hash function
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  // Secondary hash function for double hashing
  hash2(key) {
    // You can choose a different prime number for a good distribution
    return 5 - (key.length % 5);
  }

  // Insert key-value pair into the hash table
  insert(key, value) {
    let index = this.hash(key);
    const stepSize = this.hash2(key);

    // Probe sequence using double hashing
    let i = 0;
    while (this.table[index] !== undefined) {
      // You may need to handle cases where the key already exists (updating value, etc.)
      i++;
      index = (index + i * stepSize) % this.size;
    }

    // Insert at the calculated index
    this.table[index] = { key, value };
  }

  // Retrieve value from the hash table
  get(key) {
    let index = this.hash(key);
    const stepSize = this.hash2(key);

    // Probe sequence using double hashing
    let i = 0;
    while (this.table[index] && this.table[index].key !== key) {
      i++;
      index = (index + i * stepSize) % this.size;
    }

    // Return the value if found, otherwise return undefined
    return this.table[index] ? this.table[index].value : undefined;
  }
}

// Example usage
const myHashTable = new HashTable(10);

// myHashTable.insert("apple", "fruit");
// myHashTable.insert("banana", "fruit");
// myHashTable.insert("carrot", "vegetable");

// console.log(myHashTable.get("apple"));   // Output: fruit
// console.log(myHashTable.get("banana"));  // Output: fruit
// console.log(myHashTable.get("carrot"));  // Output: vegetable
// console.log(myHashTable.get("grape"));   // Output: undefined (not found)

console.log(myHashTable.hash2("name"))
