const {twosm} = require ('./2sm');


test ("finds the target", () =>{
    expect (twosm([2,7,11,15], 9)).toEqual([0,1]);
});