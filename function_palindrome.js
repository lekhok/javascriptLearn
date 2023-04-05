/* Write a function that takes a string as a parameter and returns true if the string is a palindrome 
(reads the same backwards as forwards), false otherwise. */



function palindrome(str){
let revstr = "";
    for (var i = str.length - 1; i>=0 ; i--){

        //revstr = revstr + str[i]; 
        revstr += str[i]; 
    }

    if (revstr === str){
        console.log('String "' + str + '" is a palindrome')
    }
    else{
        console.log('String "' + str + '" is NOT a palindrome')
    }
}

var str = "kayak"
palindrome(str);