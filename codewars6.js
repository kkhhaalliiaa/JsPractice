// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

let getSum = function(a, b) {
    // find the smaller and larger number
    let start = Math.min(a, b);  // This gets the smaller number
    let end = Math.max(a, b);    // This gets the larger number

    // to keep track of the sum
    let sum = 0;

    //Add all the numbers between start and end 
    for (let i = start; i <= end; i++) {
      sum += i;  // this adds the current number to the sum
    }

    // return the sum
    return sum;
}

//This was a tough one! I had to put a lot of thought into it and work through the details. It was hard, but when it finally clicked, it felt really good. Definitely a sense of achievement after getting it right!