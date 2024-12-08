// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
    //add two numbers
    let sum = a + b;

    //return the result in binary using .toString(2)
return sum.toString(2);
}

console.log(addBinary(5,9))

// Answer 2:
// const addBinary = (a, b) => (a + b).toString(2);

//This one was a little tricky, but it felt great to figure it out! I had to think through the steps and handle some tricky cases, but once I got it, everything else was easy. It’s so satisfying to make progress!