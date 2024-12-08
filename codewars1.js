//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
//For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]

let arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];

function arrL(arr) {
    // Sort the array by comparing the lengths of each word
    arr.sort((a, b) => a.length - b.length);
    
    // Return the sorted array
    return arr;
}

console.log(arrL(arr));  // This will print the sorted array

//This was a nice easy start! It felt good to solve it quickly with a simple solution. Getting a quick win always helps me get in the zone.