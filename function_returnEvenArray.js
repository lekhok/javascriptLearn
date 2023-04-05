/* Write a function that takes an array of numbers as a 
parameter and returns a new array with only the even numbers.*/

function evenReturn(arr){
    for(var i=0; i<arr.length; i++){
        if (arr[i]%2 == 0){
            console.log(arr[i]);
        }
    }
}

arr = [10, 8, 7, 6 ,5 ,4,3,2,1, 25, 50, 100,75,76]
evenReturn(arr); 