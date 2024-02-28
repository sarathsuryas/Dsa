const array = [10,8,20,6,11,1]
let sorted , temp
for(let i = 0; i < array.length-1; i++){
    sorted = false
    for(let j = 0; j < array.length-i-1; j++){
    
      if(array[j] > array[j+1]){
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
        sorted = true
      }
    }
    if(sorted===false){
      break;
    }
}

console.log(array)