class hashTable {
  constructor(size){
    this.table = new Array(size)
    this.size = 0
  }
  hash(key){
    let hash = 0
    for(let i = 0; i < key.length; i++){
      hash+= key.charCodeAt(i)
    }
    return hash % this.table.length
  }
  set(key, value){
    let index = this.hash(key)
    if(this.table[index]){
       for(let i = 0; i < this.table[index].length; i++){
        if(this.table[index][i][0] == key){
          this.table[index][i][1] = value
          return
        }
       }
       this.table[index].push([key,value])
    }else {
      this.table[index] = []
      this.table[index].push([key,value])
    }
  }
  get(key){
    let index = this.hash(key)
    if(this.table[index]){
      for(let i = 0; i < this.table[index].length;i++){
        if(this.table[index][i][0] === key){
          return this.table[index][i][1]
        }
      }
    }
    return undefined
  }
  remove(key){
    const index = this.hash(key)
    if(this.table[index]){
      for(let i = 0; i < this.table[index].length;i++){
        if(this.table[index][i][0]==key){
          this.table[index].splice(i,1)
        }
      }
      return true
    }
    return false
  }
}

const table = new hashTable(100)
table.set("name", "sarath")
table.set("name","kannan")
table.set("nmae","Raju")
table.set("age",26)
table.remove("nmae")
table.remove("name")
console.log(table.table)
console.log(table.get("nmae"))