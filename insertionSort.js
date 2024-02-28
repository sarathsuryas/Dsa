let arr = [12, 11, 13, 5, 6 ];  
    let n = arr.length,j,key;  

    for(let i = 1; i < n; i++){
      key = arr[i]
      j = i-1
       while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j]
            j = j - 1
       }
       arr[j+1] = key
    }
    console.log(arr)
3