/* Write a program to store the months in an object 
called calender and return the month as a sting after entering the month number */

function monthFunction(monthVal) {

let month = "";


const calndr = {
    1 : "january",
    2 : "febuary",
    3 : "march",
    4 : "april",
    5 : "may",
    6 : "june",
    7 : "july",
    8 : "august",
    9 : "september",
    10 : "october",
    11 : "november",
    12 : "december",
}

month = calndr[monthVal]

return month;

}

console.log(monthFunction(12))
