/*Write a function reverseString that takes a 
string as a parameter and returns the reverse of the string.*/




function strReverse(str){
    let revstr = " ";
    
    for (i=str.length-1; i>=0; i--){
        
        revstr = revstr + (str[i])

    }
    console.log(revstr)
}

var newstr = "This is a test string";

strReverse(newstr)