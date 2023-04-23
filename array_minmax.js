/* Find the Maximum and Minimum Values: Write a function that takes an array of numbers as input and returns the maximum and minimum values in the array */

let max = 0;
let min = 0;

function minmax(arr) {
    min = arr[0]

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

        else if (arr[i] < min) {
            min = arr[i]
        }
    }

    minmaxarr = [min, max]
    return minmaxarr

}

let arr = [10, 5, 2, 1, 55];
console.log(minmax(arr));