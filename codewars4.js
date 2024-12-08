// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
    //Split the string into an array of numbers 
    const numArray = numbers.split(' ').map(Number);  // Convert to an array of numbers

    // Find the highest and lowest numbers using Math.max and Math.min
    const highest = Math.max(...numArray);
    const lowest = Math.min(...numArray);

    //Return the result as a string with the highest number first
    return `${highest} ${lowest}`;
}


  console.log(highAndLow("1 2 3 4 5"));  //"5 1"
  console.log(highAndLow("1 2 -3 4 5")); //"5 -3"
  console.log(highAndLow("1 9 3 4 -5")); //"9 -5"


//This was a tough one! I had to put a lot of thought into it and work through the details. It was hard, but when it finally clicked, it felt really good. Definitely a sense of achievement after getting it right!