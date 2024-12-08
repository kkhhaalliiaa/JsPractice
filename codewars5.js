// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// isSquare([1, 4, 9, 16]) --> true

// isSquare([3, 4, 7, 9]) --> false

// isSquare([]) --> undefined
// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None

let isSquare = function(arr) {
    // If the array is empty, return undefined
    if (arr.length === 0) {
    return undefined;
    }

    // Loop through each number in the array
    for (let i = 0; i < arr.length; i++) {
    var num = arr[i];
    
      // Check if the square root of the number is an integer
    if (Math.sqrt(num) !== Math.floor(Math.sqrt(num))) {
        return false;  // If not a square number, return false
    }
    }

    return true;  // If all numbers are square numbers, return true
}

  // Example 1: All square numbers
  console.log(isSquare([1, 4, 9, 16]));  // true

  // Example 2: Not all numbers are square numbers
  console.log(isSquare([3, 4, 7, 9]));  //  false

  // Example 3: Empty array
  console.log(isSquare([]));  // undefined

  //This was a tough one! I had to put a lot of thought into it and work through the details. It was hard, but when it finally clicked, it felt really good. Definitely a sense of achievement after getting it right!