//function to create array from start to end incrementing by step
function range(start, end, step) {
  let myArray = [];

  //only add numbers to the array if conditions are met
  if(start !== undefined && end !== undefined && step !== undefined &&
    start <= end && step > 0) {
    for(let i = 0; i <= Math.floor((end - start) / step); i++) {
      myArray[i] = start + i * step;
    }
  }

  return myArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));