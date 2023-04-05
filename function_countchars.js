/*Write a function countChars that takes a string and a character as parameters,
 and returns the number of times the character appears in the string.*/

 function countChars(str,chr){

    let count = 0;

    for(i=0; i<str.length; i++)
    if(str[i] == chr){
    count++;
    }
    console.log(count)
 }

 countChars("this is a test string" , "t")