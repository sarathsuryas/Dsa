function quickSort(array){
  if(array.length < 2){
    return array
  }
  const left = []
  const right = []
  let pivot = array[array.length-1]
  for(let i = 0; i < array.length-1; i++){ 
    if(array[i] < pivot){
      left.push(array[i])
    }else{
      right.push(array[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}
const array = []
console.log(quickSort(array))