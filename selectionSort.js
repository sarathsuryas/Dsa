const array = [10]

for(let i = 0; i < array.length-1; i++){
    let lowestValue = array[i]
    let indexOfLowestValue = i
    for(let j = i + 1; j < array.length; j++){
      if(array[i] > array[j]){
        lowestValue = array[j]
        indexOfLowestValue = j
      }
      let temp = array[i]
      array[i] = lowestValue
      array[indexOfLowestValue] = temp  
    }
    
}

console.log(array)