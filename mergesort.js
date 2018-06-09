function mergeSort(arr) {

  // divide array into left and right
  // if array.length === 1, return
  // else recurse
  
  if (arr.length === 1) {
    return arr;
  } else {
    let mid = arr.length / 2;
    mid = Math.floor(mid);
    
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

  // let merged = merge(
  //   mergeSort(left),
  //   mergeSort(right)
  // );

  // OR:

  console.log('left', left)
  console.log('right', right)
  
  return  merge(mergeSort(left), mergeSort(right));
  }

}

function divideArray(arr) {

  console.log(arr)
  if (arr.length === 1) {
    // console.log('returning value:' , arr)
    return arr;
  } else {
    let mid = arr.length / 2;
    mid = Math.floor(mid);
    
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
   
    divideArray(left)
    divideArray(right)
  }
}
  
console.log(divideArray([0,1,2,3,4]))


// compare the arrays item by item and return the concatenated result

function merge(left, right) {
    // declare a result array
    var result = [];

    // while left array and right array have elements remaining:
    while (left.length && right.length) {
      // compare the first elements of each. if smaller, remove that element and place it into our result array
        if (left[0] <= right[0]) {
            let shiftedLeft = left.shift();
            result.push(shiftedLeft);
        } else {
            let shiftedRight = right.shift();
            result.push(shiftedRight);
        }
    }

    // concatenate whatever is left over:
    result = result.concat(left);
    result = result.concat(right);
 
    return result;
}
 

mergeSort([7,6,0,9,3,1,2,5,4,8]);