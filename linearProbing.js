class HashTable { 
  constructor(size){
    this.table = new Array(size).fill(null)
    this.size = size
  }
 hash(key){
  let hash = 0
  for(let i = 0; i < key.length; i++){
    hash = (hash + key.charCodeAt(i) * i) % this.size
  }
  return hash
 }

set(key, value){
   let index = this.hash(key)
   let startIndex = index
   while(this.table[index]!==null && this.table[index][0]!==key){
    index = (index + 1) % this.size
    if(startIndex === index){
      console.log("hash table is full")
      return
    }
   }
   this.table[index] = [key,value]
}
get(key){
  let index = this.hash(key)
  return this.table[index][1]
}
}

const table = new HashTable(100)
table.set('grapes', 10000);
table.set("name","sarath")
table.set("nmae","Raju")
console.log(table.get("grapes"))

//console.log(table.set("aplpes",60));