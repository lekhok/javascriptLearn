/*Write a function that takes an array of strings as a 
parameter and returns the length of the longest string in the array.*/

arr = ["test", "test 2 ", "test 3"];

function longestLength(arr) {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
      let currentLength = arr[i].length;
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    }
    console.log(maxLength);
  }

longestLength(arr)

/* 

arr = ["test", "test 2 ", "test 3"];


function longest(arr){
    for (i=0 ; i<arr.length; i++){
        
        let indexelement = arr[i]
        let indexelement1 = arr[i+1]
        let indexlength = indexelement.length
        let indexlength1 = indexelement1.length
        
        console.log(indexlength)


    }
}



longest(arr)

The error in the code segment is that the loop within the longest function iterates up to arr.length - 1, and on the last iteration, indexelement1 is assigned the value undefined. This is because i+1 is equal to arr.length on the last iteration, which is outside the bounds of the array.

To fix this error, you can change the loop condition to iterate up to arr.length - 2 instead of arr.length - 1, or you can add a check inside the loop to make sure that i+1 is within the bounds of the array before assigning indexelement1. */
