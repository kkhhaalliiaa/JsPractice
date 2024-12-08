// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// function filter_list(l) {
//     // Return a new array with the strings filtered out
//   }

function filter_list(l) {
    // Use the filter method to keep only non-string elements
    return l.filter(item => typeof item !== 'string');
}

console.log(filter_list([1, 2, 'a', 'b'])); //  [1, 2]
console.log(filter_list([1, 'a', 'b', 0, 15])); //[1, 0, 15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); //  [1, 2, 123]

//This one was a little tricky, but it felt great to figure it out! I had to think through the steps and handle some tricky cases, but once I got it, everything else was easy. It’s so satisfying to make progress!