/*
  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
 */

  // Setup
function phoneticLookup(val) {
  let result = "";

  // Created an object by the name lookup and added property value pairsi

   const lookup = {
       "alpha" : "Adams",
       "bravo" : "Boston",
       "charlie" : "Chicago",
       "delta" : "Denver",
       "echo" : "Easy",
       "foxtrot" : "Frank"
    };

   
   // assigning result with the data from the lookup object and the requested pair using the val
    result = lookup[val]

  return result;
}

console.log(phoneticLookup("charlie"))
 