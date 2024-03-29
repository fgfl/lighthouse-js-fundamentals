/* function returns the index of the last time the value occurs in the array
  param1: the array to search
  param2: number to look for
  return: -1 if value is not found. Else last index where value is found
*/
function lastIndexOf(array, value) {
  for(let i = array.length - 1; i >= 0; i--) {
    if(array[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);