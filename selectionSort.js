const array = [10,3,4,2,1]
function selectionSort(array){
  let indexOfLowestValue,lowestValue
  for(let i = 0; i < array.length-1; i++){
    lowestValue = array[i]
    indexOfLowestValue = i
    for(let j = i+1; j < array.length; j++){
      if(array[i] > array[j]){
        lowestValue = array[j]
         indexOfLowestValue = j
      }
      let temp = array[i]
      array[i] = array[indexOfLowestValue]
      array[indexOfLowestValue] = temp 
    }
  }
  return array
}

console.log(selectionSort(array))