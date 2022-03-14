FizzBuzz(100);

function FizzBuzz(num) {
    //Checks to see if the correct input was used. Return an error if not correct. 
    if(!Number.isInteger(num)) {console.log("ERROR: An Integer 1-100 must be used."); return;}
    if(num < 1 || num > 100){console.log("ERROR: An Integer 1-100 must be used."); return;}

    //Runs a loop and console logs FizzBuzz if i is a multiple of 3 & 5,
    //Fizz if i is a multiple of 3,
    //Buzz if i is a multiple of 5
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0) {
            console.log("Fizz");
        }
        else if(i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }  
    }
}